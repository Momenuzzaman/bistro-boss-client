import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// category img import
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <>
      <SectionTitle
        subtitle={"From 11:00am to 10:00pm"}
        title={"order online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-6 max-w-7xl"
      >
        <SwiperSlide>
          <img className="w-full" src={img1} />
          <h3 className="text-3xl md:text-4xl text-center md:-mt-10 text-white uppercase">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} />
          <h3 className="text-3xl md:text-4xl text-center md:-mt-10 text-white uppercase">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} />
          <h3 className="text-3xl md:text-4xl text-center md:-mt-10 text-white uppercase">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} />
          <h3 className="text-3xl md:text-4xl text-center md:-mt-10 text-white uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img5} />
          <h3 className="text-3xl md:text-4xl text-center  text-white md:-mt-10 uppercase">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
