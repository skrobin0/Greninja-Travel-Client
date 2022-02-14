import React from "react";
import SwiperCore, { EffectCoverflow,Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Carousel.css";
import image1 from "../../../Images/image-1.jpg";
import image2 from "../../../Images/image-2.jpg";
import image3 from "../../../Images/image-3.jpg";
import image4 from "../../../Images/image-4.jpg";
import image5 from "../../../Images/image-5.jpg";
import image6 from "../../../Images/image-6.jpg";
import image7 from "../../../Images/image-7.jpg";
import image8 from "../../../Images/image-8.jpg";
import image9 from "../../../Images/image-9.jpg";
import { Container } from "react-bootstrap";


SwiperCore.use([EffectCoverflow,Navigation, Pagination]);

const Crousel = () => {
  return (
    <Container fluid>
      <Swiper
      navigation={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
        pagination={{clickable:true}}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Crousel;
