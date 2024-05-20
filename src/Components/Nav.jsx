import { Link, NavLink } from "react-router-dom";
import "./Shared.css";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Nav = () => {
  const { user, logOut } = useAuth();
  const { cart } = useCart();
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
          to={"/menu"}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
          to={"/shop"}
        >
          Our Shop
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
            to={"/dashboard/userHome"}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-20 text-white bg-[#15151580] py-3 px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown -ml-3">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-[#151515] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex flex-col gap-px md:gap-2 font-cinzel">
          <Link className="font-black text-xl md:text-[28px]" to={"/"}>
            BISTRO BOSS
          </Link>
          <Link className="-mt-2 space text-lg md:text-[20px]" to={"/"}>
            Restaurant
          </Link>
        </div>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6">{navLinks}</ul>
        </div>
        {user && (
          <>
            <Link to={"/dashboard/myCart"} className="indicator mr-4">
              <span className="indicator-item badge badge-secondary">
                +{cart?.length}
              </span>
              <button className="py-1 px-3">
                <FaShoppingCart size={20} />
              </button>
            </Link>
            <button
              onClick={() => {
                logOut().then(toast.success("Logged Out Successful"));
              }}
              className="btn btn-outline border-white text-white"
            >
              Log Out
            </button>
            {/* <FaUserAlt size={20} /> */}
          </>
        )}
        {user?.photoURL ? (
          <img className="w-11 h-11 rounded-full" src={user.photoURL} alt="" />
        ) : (
          <FaUserAlt size={20} />
        )}
      </div>
    </div>
  );
};

export default Nav;
