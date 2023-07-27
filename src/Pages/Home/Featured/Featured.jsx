import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="feature-section bg-fixed text-white  my-20">
      <div className="bg-gray-500 bg-opacity-60 pt-8">
        <SectionTitle subtitle={"Check it out"} title={"from our menu"} />
        <div className="max-w-7xl mx-auto md:flex justify-center items-center pb-20 pt-12 px-3  ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
