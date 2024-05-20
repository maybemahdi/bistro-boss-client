import SectionStart from "../SectionStart";
import useMenu from "../../Hooks/useMenu";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Recommendations = () => {
  const { menu } = useMenu();
  const salads = menu.filter((m) => m.category === "salad");
  const { user } = useAuth();
  const { refetch } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    // console.log(item)
    const cart = {
      menuID: item._id,
      name: item.name,
      recipe: item.recipe,
      image: item.image,
      category: item.category,
      price: item.price,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };
    if (user && user.email) {
      axios.post(`${import.meta.env.VITE_API_URL}/carts`, cart).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${item.name} has just added to your Cart`,
            icon: "success",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Try after login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="my-10 w-[85%] mx-auto">
      <SectionStart
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {salads.slice(0, 3).map((s) => (
          <div key={s._id} className="bg-[#F3F3F3]">
            <img
              className="w-[424px] h-[300px] object-cover"
              src={s.image}
              alt=""
            />
            <div className="my-5 w-3/4 mx-auto flex flex-col gap-1 items-center justify-center">
              <h5 className="text-center font-semibold">{s.name}</h5>
              <p className="text-center font-normal">{s.recipe}</p>
              <button
                onClick={() => handleAddToCart(s)}
                className="btn btn-outline border-b-4 mt-3 text-[#BB8506]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
