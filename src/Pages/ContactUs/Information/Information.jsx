import React from "react";

import { FaPhone, FaLocationDot, FaRegClock } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Information = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <SectionTitle subtitle={"Visit Us"} title={"OUR LOCATION"} />
      </div>
      <div className="max-w-7xl mx-auto  px-3 lg:px-0">
        <div className="grid gird-cols-1 md:grid-cols-3 gap-3 ">
          <div className=" text-center h-[300px] border">
            <p className="h-20 flex justify-center items-center bg-[#D1A054]">
              <FaPhone className="h-8 w-8 text-white" />
            </p>
            <div className="w-5/6 mx-auto h-[200px] bg-[#F3F3F3]">
              <p className="uppercase py-6 text-lg font-semibold">Phone</p>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="text-center h-[300px]  border">
            <p className="h-20  flex justify-center items-center bg-[#D1A054]">
              <FaLocationDot className="h-8 w-8 text-white" />
            </p>
            <div className="w-5/6 mx-auto h-[200px] bg-[#F3F3F3]">
              <p className="uppercase py-6 text-lg font-semibold">ADDRESS</p>
              <p>Mirpur DOSH </p>
            </div>
          </div>
          <div className="text-center h-[300px]  border">
            <p className=" h-20 flex justify-center items-center bg-[#D1A054]">
              <FaRegClock className="h-8 w-8 text-white" />
            </p>
            <div className="w-5/6 mx-auto h-[200px] bg-[#F3F3F3]">
              <p className="uppercase py-6 text-lg font-semibold">
                WORKING HOURS
              </p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p> Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
