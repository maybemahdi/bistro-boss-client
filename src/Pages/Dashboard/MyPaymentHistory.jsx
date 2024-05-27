import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";

const MyPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: payments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payment/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mb-10 mt-5 w-full md:w-3/4">
      <div className="flex px-3 font-poppins flex-col gap-1 mb-10 items-center justify-center">
        <p className="text-[#D99904] text-center text-[18px] italic">
          ---At a Glance!---
        </p>
        <hr color="#E8E8E8" />
        <h3
          className={`md:text-[40px] uppercase text-[28px] border-y-4 text-center border-[#E8E8E8] text-[#151515] px-4 py-3`}
        >
          PAYMENT HISTORY
        </h3>
      </div>
      <h3 className="font-cinzel mt-10 mb-4 font-medium text-3xl">
        Total Payments: {payments.length}
      </h3>
      <div className="overflow-x-auto mb-10">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] uppercase text-white">
            <tr>
              <th>Email</th>
              <th>Category</th>
              <th>Total Price</th>
              <th>Payent Date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, idx) => (
              <tr key={payment._id}>
                <td>{payment.email}</td>
                <td>Food Order</td>
                <td>${payment.price}</td>
                <td>{new Date(payment?.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
