import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Cover from '/src/assets/cover.png'
// import Contents from '/src/assets/contents.png'
// import img1 from '/src/assets/1.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";

// import required modules
import {Lazy, Navigation, Pagination, Keyboard } from "swiper";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        pagination={pagination}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        lazy={true}
        modules={[Lazy, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={"/cover.png"} className="swiper-lazy" alt="Cover page of magazine"/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/contents.png"} className="swiper-lazy" alt="Table of Contents"/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/1.png"} className="swiper-lazy" alt=" "/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/2.png"} className="swiper-lazy" alt=" "/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/3.png"} className="swiper-lazy" alt=" "/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
      <footer>
        made with 🤟 by
        <a href="https://github.com/greeshma2903">greeshma </a>
      </footer>
    </>
  );
}
