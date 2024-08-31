import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Parallax } from "swiper";
import s from "./Slider.module.scss";
import { build } from "../constans/slider";
const Build = ({ img }) => {
  return (
    <div className={s.container}>
      <div id="build"></div>
      <div className={s.build_title}>
        <h1> Build Your Base</h1>
        <p>What Happens Here</p>
      </div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#BA9C7F",
        }}
        speed={2500}
        loop
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        dynamicBullets={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination, Parallax, Autoplay]}
        className={s.swiper}
      >
        {build.map((item) => (
          <SwiperSlide>
            <img className={s.swiper_img} src={item.img} alt="cacao_cup" />
       
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Build;