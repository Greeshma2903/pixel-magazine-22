import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";
import "swiper/css/scrollbar";

// import required modules
import { Lazy, Navigation, Pagination, Keyboard, Scrollbar } from "swiper";
import Loader from "./Loader";

export default function App() {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    type: "fraction",
    // },
  };

  return (
    <>
      <Loader />
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
        keyboard={{
          enabled: true,
        }}
        scrollbar={{
          draggable: true,
          hide: true,
          dragSize: 40,
          snapOnRelease: true,
        }}
        lazy={true}
        modules={[Lazy, Navigation, Pagination, Keyboard, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={"https://i.imgur.com/IK40qJW.jpeg"}
            className="swiper-lazy"
            alt="Cover page of magazine"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://i.imgur.com/yM2qBTh.jpeg"}
            className="swiper-lazy"
            alt="Cover page of magazine"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        {Array.from(Array(56).keys(), (n) => n + 1).map((count) => {
          return (
            <SwiperSlide>
              <img src={`/${count}.webp`} className="swiper-lazy" alt=" " />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <footer>
        made with 🤟 by
        <a href="https://github.com/greeshma2903">greeshma </a>
      </footer>
    </>
  );
}
