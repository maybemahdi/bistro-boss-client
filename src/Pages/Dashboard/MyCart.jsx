import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Swal from "sweetalert2";
import axios from "axios";

const MyCart = () => {
  const { cart, refetch, isLoading } = useCart();
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "This Item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mb-10 mt-5">
      <div className="flex px-3 font-poppins flex-col gap-1 mb-10 items-center justify-center">
        <p className="text-[#D99904] text-center text-[18px] italic">
          ---My Cart---
        </p>
        <hr color="#E8E8E8" />
        <h3
          className={`md:text-[40px] uppercase text-[28px] border-y-4 text-center border-[#E8E8E8] text-[#151515] px-4 py-3`}
        >
          WANNA ADD MORE?
        </h3>
      </div>
      <div className="bg-[#FFFFFF] shadow p-5 md:p-[50px]">
        <div className="flex items-center justify-between gap-8 font-cinzel">
          <h3 className="md:text-3xl text-xl font-medium">Total orders: {cart.length}</h3>
          <h3 className="md:text-3xl text-xl font-medium">
            total price: $
            {cart?.reduce((total, singleCart) => total + singleCart.price, 0).toFixed(2)}
          </h3>
          <button className="btn px-3 bg-[#D1A054] transition-all duration-300 hover:bg-[#ab8143] text-white w-fit py-1">
            Pay Now
          </button>
        </div>
        <div className="overflow-x-auto my-10">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((singleCart, idx) => (
                <tr key={singleCart._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleCart.image}
                          alt={`${singleCart.name} Image`}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{singleCart.name}</td>
                  <td>${singleCart.price}</td>
                  <td className="pl-6">
                    <button
                      onClick={() => handleDelete(singleCart._id)}
                      className="bg-[#B91C1C] p-2 rounded"
                    >
                      <FaRegTrashAlt size={16} color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
