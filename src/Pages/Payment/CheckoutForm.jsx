import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, refetch } = useCart();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const totalPrice = cart
    ?.reduce((total, singleCart) => total + singleCart.price, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
          setError("Failed to initialize payment. Please try again later.");
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error: methodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (methodError) {
      console.error("Payment method error:", methodError);
      setError(methodError.message);
      return;
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("Confirm payment error:", confirmError);
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuID),
        status: "pending",
      };

      try {
        const res = await axiosSecure.post("/payments", payment);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Thank you for the payment!",
            icon: "success"
          });
          navigate("/dashboard/myPaymentHistory");
        }
      } catch (error) {
        console.error("Error saving payment:", error);
        setError(
          "Payment was successful, but there was an issue saving the payment details. Please contact support."
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <CardElement
        className="mb-10"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn px-3 bg-[#723fde] w-40 transition-all duration-300 hover:bg-[#570DF8] text-white py-1"
        type="submit"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {transactionId && (
        <p className="text-green-600">Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
