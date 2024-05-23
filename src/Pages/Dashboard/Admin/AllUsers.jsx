import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users`);
      return data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/users/${id}`
      );
      return data;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "The User has been deleted.",
        icon: "success",
      });
      refetch();
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(id);
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
      }
    });
  };
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make him admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const userInf = {
            userName: user?.userName,
            userEmail: user?.userEmail,
            userPhoto: user?.photoURL,
            role: "Admin",
          };
          console.log(userInf);
          const { data } = await axios.put(
            `${import.meta.env.VITE_API_URL}/users`,
            userInf
          );
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "The User is an Admin Now.",
              icon: "success",
            });
            refetch();
          }
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
      }
    });
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mb-10 mt-5 w-full md:w-3/4">
      <div className="flex px-3 font-poppins flex-col gap-1 mb-10 items-center justify-center">
        <p className="text-[#D99904] text-center text-[18px] italic">
          ---How many??---
        </p>
        <hr color="#E8E8E8" />
        <h3
          className={`md:text-[40px] text-[28px] uppercase border-y-4 text-center border-[#E8E8E8] text-[#151515] px-4 py-3`}
        >
          Manage All Users
        </h3>
      </div>
      <div className="bg-[#FFFFFF] shadow p-5 md:p-[50px]">
        <h3 className="md:text-3xl font-cinzel text-xl font-medium">
          Total Users: {users?.length}
        </h3>
        <div className="overflow-x-auto my-10">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td className="">
                    {user?.role === "Admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        title="Make Admin"
                        className="bg-[#D1A054] p-2 rounded"
                      >
                        <FaUsers size={16} color="white" />
                      </button>
                    )}
                  </td>
                  <td className="pl-6">
                    <button
                      title="Delete User"
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
