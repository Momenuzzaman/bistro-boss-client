import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // useCart
  const [cart] = useCart();
  // logOut
  const handleSignOut = () => {
    console.log("Sign Out");
    logOut()
      .then(() => {})
      .then((error) => console.error(error.message));
  };
  const navItems = (
    <>
      <li>
        <Link className="hover:text-[#D1A054]" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#D1A054]" to="/contactUs">
          Contact US
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#D1A054]" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#D1A054]" to="/order/salad">
          Order
        </Link>
      </li>
      {user && (
        <li>
          <Link className="hover:text-[#D1A054]" to="/dashboard/mycart">
            <button className="btn btn-xs bg-transparent border-none hover:bg-transparent">
              <FaCartPlus className="w-6 h-6 text-white  " />
              <div className="badge badge-warning">+{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
      )}
      {user ? (
        <button onClick={handleSignOut} className="btn btn-ghost btn-sm">
          Sign Out
        </button>
      ) : (
        <>
          <li>
            <Link className="hover:text-[#D1A054]" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl leading-none">
            BISTRO BOSS <br /> Restaurant
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
