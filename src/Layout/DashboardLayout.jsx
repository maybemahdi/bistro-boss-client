import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import {
  FaChartBar,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoMdBookmarks } from "react-icons/io";
import { IoBookmarksSharp, IoMailOpen, IoMenuSharp } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, NavLink, Outlet } from "react-router-dom";
import useIsAdmin from "../Hooks/useIsAdmin";

const DashboardLayout = () => {
  const [isActive, setActive] = useState(false);
  const { isAdmin } = useIsAdmin();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-[#D1A054] text-gray-800 flex justify-between lg:hidden">
        <div className="">
          {/* <div className="flex flex-col gap-px md:gap-2 font-cinzel">
            <Link className="font-black text-xl md:text-[28px]" to={"/"}>
              BISTRO BOSS
            </Link>
            <Link className="-mt-2 space text-lg md:text-[20px]" to={"/"}>
              Restaurant
            </Link>
          </div> */}
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none bg-[#D1A054]"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div className="relative min-h-screen md:flex">
        <div
          className={`lg:w-[280px] w-[230px] z-10 lg:fixed bg-[#D1A054] fixed min-h-screen font-cinzel flex-col p-8 gap-5 transform ${
            isActive && "-translate-x-full shadow-md"
          } lg:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="flex flex-col gap-px md:gap-2 font-cinzel">
            <Link className="font-black text-xl md:text-[28px]" to={"/"}>
              BISTRO BOSS
            </Link>
            <Link className="-mt-2 space text-lg md:text-[20px]" to={"/"}>
              Restaurant
            </Link>
          </div>
          <div className="font-[500] flex flex-col gap-4 mt-[25px]">
            {isAdmin ? (
              <>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard"}
                    end
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <HiMiniHome className="w-6 h-6" /> Admin Home
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/addItem"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <FaUtensils className="w-6 h-6" /> Add Items
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/manageItems"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <FaChartBar className="w-6 h-6" /> Manage Items
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/manageBookings"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <IoBookmarksSharp className="w-6 h-6" /> Manage Bookings
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/allUsers"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <FaUsers className="w-6 h-6" /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard"}
                    end
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <HiMiniHome className="w-6 h-6" /> User Home
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/myReservation"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <SlCalender className="w-6 h-6" /> Reservation
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/myPaymentHistory"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <FaWallet className="w-6 h-6" /> Payment History
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/myCart"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <FaShoppingCart className="w-6 h-6" /> My Cart
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/addReview"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <MdRateReview className="w-6 h-6" /> Add Review
                  </NavLink>
                </li>
                <li className="list-none">
                  <NavLink
                    to={"/dashboard/myBooking"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ffffff]"
                        : "text-[#151515]"
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "16px",
                    }}
                  >
                    <IoMdBookmarks className="w-6 h-6" /> My Booking
                  </NavLink>
                </li>
              </>
            )}
          </div>
          <div className="divider h-3"></div>
          <div className="font-[500] flex flex-col gap-4">
            <li className="list-none">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffffff]"
                    : "text-[#151515]"
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "16px",
                }}
              >
                <HiMiniHome className="w-6 h-6" /> Home
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to={"/menu"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffffff]"
                    : "text-[#151515]"
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "16px",
                }}
              >
                <IoMenuSharp className="w-6 h-6" /> Menu
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to={"/shop"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffffff]"
                    : "text-[#151515]"
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "16px",
                }}
              >
                <FaShoppingBag className="w-6 h-6" /> Shop
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffffff]"
                    : "text-[#151515]"
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "16px",
                }}
              >
                <IoMailOpen className="w-6 h-6" /> Contact
              </NavLink>
            </li>
          </div>
        </div>
        <div className="flex-1 p-8 lg:ml-[280px] flex flex-col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
