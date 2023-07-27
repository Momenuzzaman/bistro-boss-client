import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 py-[80px] h-80 bg-[#1F2937] text-white text-center space-y-3">
            <h3 className="text-3xl font-semibold pb-2">CONTACT US</h3>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className="md:w-1/2 py-[80px] h-80 bg-[#111827] text-white text-center space-y-3">
            <h3 className="text-3xl font-semibold pb-2">Follow US</h3>
            <p>Join us our social media</p>
            <div className="flex  justify-center space-x-6">
              <span>
                <FaFacebookF className="w-[35px] h-[35px]" />
              </span>
              <span>
                <FaInstagram className="w-[35px] h-[35px]" />
              </span>
              <span>
                <FaTwitter className="w-[35px] h-[35px]" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer footer-center p-4 bg-black text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
