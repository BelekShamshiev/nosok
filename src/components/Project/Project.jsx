import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../../styles/swiper.module.css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import s from "./Project.module.scss";
import Image from "next/image";
import { slider } from "@/constans/slider";
const Project = ({ title, img }) => {
  return (
    <div className={s.project}>
      <div className={s.project_title}>
        <div className={s.project_title_desc}>
          <h1>Проекты в работе</h1>
        </div>
        <div className={s.project_title_swiper}>
          <Swiper
            style={{
              "--swiper-pagination-color": "#8DC2C0",
              "--swiper-pagination-width": "20",
            }}
            loop
            speed={2500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              412:{
                slidesPerView:1.5,
                spaceBetween:0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              721: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className={styles.slider}
          >
            {slider.map((item) => (
              <div className={styles.sliider}>
              <SwiperSlide>
                <div className={styles.swider}>
                  <div className={styles.swider_title}>
                    <h3>{item.title}</h3>
                    <Image
                      src={item.img}
                      alt="socks"
                      width={160}
                      height={170}
                    ></Image>
                  </div>
                </div>
              </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
