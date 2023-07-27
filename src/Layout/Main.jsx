import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const withOutHederAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {withOutHederAndFooter || <Navbar />}
      <Outlet />
      {withOutHederAndFooter || <Footer />}
    </div>
  );
};

export default Main;
