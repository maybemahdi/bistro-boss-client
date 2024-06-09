import { useQuery } from "@tanstack/react-query";
import { IoWallet } from "react-icons/io5";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaShoppingBag } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: userStat, isLoading } = useQuery({
    queryKey: ["userStat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userStat/${user?.email}`);
      return data;
    },
  });
  console.log(userStat);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="my-5">
      <h2 className="font-cinzel text-[#151515] font-medium text-[32px]">
        Hi, Welcome Back
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 text-white">
        <div className="bg-[#BB34F5] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <IoWallet color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">{userStat?.totalMenu}</h4>
            <p className="text-[24px]">Menu</p>
          </div>
        </div>
        <div className="bg-[#D3A256] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <FaShoppingBag color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">{userStat?.myOrder?.length}</h4>
            <p className="text-[24px]">Shop</p>
          </div>
        </div>
        <div className="bg-[#FE4880] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <FiPhoneCall color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">+16212</h4>
            <p className="text-[24px]">Contact</p>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col lg:flex-row rounded">
        <div className="bg-[#FFEDD5] lg:border-r-[3px] border-[#D1A054] flex flex-col items-center justify-center py-[70px] basis-1/2">
          <div className="flex flex-col items-center gap-8 justify-center">
            <img
              className="w-[198px] border-[3px] border-[#D1A054] h-[198px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h3 className="font-medium text-[32px] font-cinzel">
              {user?.displayName}
            </h3>
          </div>
        </div>
        <div className="bg-[#FEF9C3] basis-1/2 flex flex-col items-center justify-center py-[70px]">
          <div className="flex flex-col items-center gap-8 justify-center">
            <h3 className="font-cinzel text-[#151515] font-medium text-[32px]">
              Your Activities
            </h3>
            <div>
                <p>Orders: {userStat?.myOrder?.length}</p>
                <p>Payments: {userStat?.myOrder?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
