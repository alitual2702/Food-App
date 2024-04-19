import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./com.css";
import { Pagination } from "swiper/modules";
import Cardcomponent from "./Cardcomponent";

const Combos = () => {
 

  return (
    <div className="combo-section">
      <div className="combo-wrapper">
        <h2 className="combo-title">combos</h2>
        <p className="combo-discrip">we have the perfect burger combination.</p>
        <p className="combo-discrip">1. choose your best option.</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={35}
          
          pagination={{
            dynamicBullets : true,
            clickable: true,
            dynamicMainBullets : 1
            
        }}
        breakpoints={{
        
          0 : {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1081: {
            slidesPerView: 3,
            spaceBetween: 35,
          }
      }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cardcomponent
              numbering="1"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cardcomponent
              numbering="2"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cardcomponent
              numbering="3"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cardcomponent
              numbering="4"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cardcomponent
              numbering="5"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cardcomponent
              numbering="6"
              itemone="Classic Burgers"
              itemtwo="Chocolate Milkshake"
              itemthree="New York Cheezecake"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Combos;
