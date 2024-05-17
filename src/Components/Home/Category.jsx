import SectionStart from "../SectionStart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import { useState } from "react";
const Category = () => {
  return (
    <section className="my-10">
      <SectionStart
        heading={`ORDER ONLINE`}
        subHeading={`---From 11:00am to 10:00pm---`}
      />
      <div className="mt-10 w-[85%] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full object-cover" src={slide1} alt="" />
            <h3 className="font-cinzel text-center md:text-[32px] text-white -mt-16">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full  object-cover" src={slide2} alt="" />
            <h3 className="font-cinzel text-center md:text-[32px] text-white -mt-16">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full  object-cover" src={slide3} alt="" />
            <h3 className="font-cinzel text-center md:text-[32px] text-white -mt-16">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full  object-cover" src={slide4} alt="" />
            <h3 className="font-cinzel text-center md:text-[32px] text-white -mt-16">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full object-cover" src={slide5} alt="" />
            <h3 className="font-cinzel text-center md:text-[32px] text-white -mt-16">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
