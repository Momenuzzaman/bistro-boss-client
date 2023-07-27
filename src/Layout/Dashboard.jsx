import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarDays,
  FaCalendarPlus,
  FaCartShopping,
  FaHouseChimney,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";
import { RiMailFill, RiShoppingBagFill } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  // const isAdmin = true;
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* nav */}
          <div className="drawer sticky">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar bg-[#D1A054]  lg:hidden">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <p className="flex-1 px-2 mx-2 text-lg font-medium">
                  Bistro Boss
                </p>
                <div className="flex-none hidden lg:block"></div>
              </div>
            </div>
          </div>
          {/* end */}

          <Outlet />
        </div>
        <div className="drawer-side h-full md:h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content space-y-4 ">
            {isAdmin ? (
              // admin
              <>
                <li className="hidden lg:block">
                  <h1 className="text-4xl font-semibold text-center">
                    Bistro Boss
                  </h1>
                </li>
                <li>
                  <NavLink to="/dashboard/adminHome" className="dashboardNav">
                    <FaHouseChimney className="dashboardNavIcon" /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem" className="dashboardNav">
                    <ImSpoonKnife className="dashboardNavIcon" /> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems" className="dashboardNav">
                    <AiOutlineMenuUnfold className="dashboardNavIcon" /> Manage
                    Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-booking"
                    className="dashboardNav"
                  >
                    <FaBook className="dashboardNavIcon" />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUser" className="dashboardNav">
                    <FaUsers className="dashboardNavIcon" /> All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="hidden lg:block">
                  <h1 className="text-4xl font-semibold text-center">
                    Bistro Boss
                  </h1>
                </li>
                <li>
                  <NavLink to="/dashboard/user-home" className="dashboardNav">
                    <FaHouseChimney className="dashboardNavIcon" /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation" className="dashboardNav">
                    <FaCalendarDays className="dashboardNavIcon" /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className="dashboardNav"
                  >
                    <FaWallet className="dashboardNavIcon" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart" className="dashboardNav">
                    <FaCartShopping className="dashboardNavIcon" />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-review" className="dashboardNav">
                    <VscFeedback className="dashboardNavIcon" /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-booking" className="dashboardNav">
                    <FaCalendarPlus className="dashboardNavIcon" /> My Booking
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="dashboardNav">
              <NavLink to="/" className="dashboardNav">
                <FaHouseChimney className="dashboardNavIcon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="dashboardNav">
                <FiMenu className="dashboardNavIcon" /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad" className="dashboardNav">
                <RiShoppingBagFill className="dashboardNavIcon" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className="dashboardNav">
                <RiMailFill className="dashboardNavIcon" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
