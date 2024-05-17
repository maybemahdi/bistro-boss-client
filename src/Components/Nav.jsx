import { Link, NavLink } from "react-router-dom";
import "./Shared.css";

const Nav = () => {
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;