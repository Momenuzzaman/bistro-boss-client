import React from "react";
// img animation
import { Parallax } from "react-parallax";
const Cover = ({ title, img, description }) => {
  return (
    <div>
      <div className="md:hidden">
        <Parallax
          bgImage={img}
          bgImageAlt="Mobile Image"
          strength={300}
          style={{ height: "350px" }}
        >
          <div className="content bg-black opacity-60 text-center text-white ">
            <h1 className="mb-5 text-5xl md:text-[90px]  font-bold uppercase mt-5 ">
              {title}
            </h1>
          </div>
        </Parallax>
      </div>
      <div className="hidden md:block">
        <Parallax
          blur={{ min: -50, max: 50 }}
          bgImage={img}
          bgImageAlt="the menu"
          strength={-200}
        >
          <div className="hero  object-cover h-[700px] ">
            <div className="w-4/5 text-center text-neutral-content">
              <div className=" bg-black  md:py-[100px] opacity-60">
                <h1 className="mb-5 text-5xl md:text-[90px] text-white font-bold uppercase">
                  {title}
                </h1>
                <p className="mb-5 text-xl md:text-2xl uppercase w-5/6 mx-auto">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Cover;
