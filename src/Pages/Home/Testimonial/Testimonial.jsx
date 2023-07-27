import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// rating
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
// react icon
import { FcComments } from "react-icons/fc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const reviewsFetch = async () => {
      const response = await fetch("http://localhost:8000/review");
      const data = await response.json();
      console.log(data);
      setReviews(data);
    };
    reviewsFetch();
  }, []);
  return (
    <section className="max-w-7xl p-3 mx-auto">
      <SectionTitle subtitle={"What Our Client Say"} title={"Testimonials"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-12 md:mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
              />
              <FcComments className="h-20 w-20 mt-[48px]" />
              <p className="py-8 text-xl">{review?.details}</p>
              <p className="text-[#CD9003] text-3xl font-semibold">
                {review?.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
