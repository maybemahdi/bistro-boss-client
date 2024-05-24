import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const { menu, loading, refetch } = useMenu();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure
          .delete(`/menu/${id}`)
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
  const handleUpdateRoute = id => {
    navigate(`updateItem/${id}`)
  }
  if (loading) return <LoadingSpinner />;
  return (
    <div className="mb-10 mt-5 w-full md:w-3/4 mx-auto">
      <div className="flex px-3 font-poppins flex-col gap-1 mb-10 items-center justify-center">
        <p className="text-[#D99904] text-center text-[18px] italic">
          ---Whats new?---
        </p>
        <hr color="#E8E8E8" />
        <h3
          className={`md:text-[40px] uppercase text-[28px] border-y-4 text-center border-[#E8E8E8] text-[#151515] px-4 py-3`}
        >
          ADD AN ITEM
        </h3>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((singleMenu, idx) => (
              <tr key={singleMenu._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleMenu.image}
                        alt={`${singleMenu.name} Image`}
                      />
                    </div>
                  </div>
                </td>
                <td>{singleMenu.name}</td>
                <td>${singleMenu.price}</td>
                <td className="pl-6">
                  <button
                  onClick={() => handleUpdateRoute(singleMenu._id)}
                    title="Update Item"
                    className="bg-[#D1A054] p-2 rounded"
                  >
                    <FaRegEdit size={16} color="white" />
                  </button>
                </td>
                <td className="pl-6">
                  <button
                    onClick={() => handleDelete(singleMenu._id)}
                    title="Delete Item"
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
  );
};

export default ManageItems;
