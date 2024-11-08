import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { cartContext } from "../../App";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const cart = useContext(cartContext);
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div
      className={`${
        pathName === "/category/all" || pathName === "/"
          ? "navbar text-white bg-primaryColor"
          : "navbar text-gray-700 bg-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/category/all">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/category/all">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        <button className="bg-white p-3 rounded-full relative">
          <IoCartOutline size={15} className="text-primaryColor" />
          <p className="absolute -top-3 right-0 bg-yellow-300 px-2 rounded-full text-black">
            {cart.length}
          </p>
        </button>
        <button className="bg-white p-3 rounded-full">
          <FaHeart size={15} className="text-primaryColor" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
