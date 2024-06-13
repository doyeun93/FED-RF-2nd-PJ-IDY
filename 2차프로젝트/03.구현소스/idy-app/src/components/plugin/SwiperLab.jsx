// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./css/swiper.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
import { Navigation} from "swiper/modules";

import { mainData } from "../data/mainarea";

export function SwiperLab() {
  // 불러 올 이미지 리스트
  const selData = mainData;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation]}

        breakpoints={{
            200: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 8,
            },
          }}

        className="mySwiper"
      >
        {selData.map((v, i) => (
          <SwiperSlide key={i}>
            <section className="lab-img">
                  {/* 이미지영역 */}
                  <div className="lab-img2">
                    <img src={v.imgName} alt={v.title} />
                  </div>
                  {/* 이미지 타이틀영역 */}
                  <div className="lab-tit">
                    <h3>{v.title}</h3>
                  </div>
                  <div className="lab-cate">
                    <h4>{v.category}</h4>
                  </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperLab 컴포넌트 ///////////
