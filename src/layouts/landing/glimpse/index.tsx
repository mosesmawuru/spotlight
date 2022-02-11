import React, { useEffect, useState } from "react";
import { GlimpseSection, GlimpseTitle, GlimpsSlider } from "./glimpse.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import slider1 from "assets/image/slider1.png";
import slider2 from "assets/image/slider2.png";
import slider3 from "assets/image/slider3.png";

const GlimpsePart = () => {
  const [screenW, setScreenW] = useState(0);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setScreenW(window.innerWidth);
  };

  return (
    <GlimpseSection>
      <GlimpseTitle>Get a glimpse</GlimpseTitle>
      <GlimpsSlider>
        <Swiper
          slidesPerView={screenW > 1024 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={screenW > 1024 ? false : true}
          modules={screenW < 1024 ? [Pagination, Navigation] : []}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img src={slider1} alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="slider1" />
          </SwiperSlide>
        </Swiper>
      </GlimpsSlider>
    </GlimpseSection>
  );
};

export default GlimpsePart;
