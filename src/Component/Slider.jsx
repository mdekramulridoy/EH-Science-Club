import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-6 md:mt-0 lg:mt-6"
    >
      <SwiperSlide>
        <div className="lg:h-[500px] md:h-[400px]">
          <img
            src="https://i.ibb.co.com/Bn6W53k/Sunrise-Mountain-Top-Travel-Adventure-Youtube-Channel-Art.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:h-[500px] md:h-[400px]">
          <img
            src="https://i.ibb.co.com/ThZPyBf/Banner-EHSC.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="lg:h-[500px] md:h-[400px]">
          <img
            src="https://i.ibb.co.com/VHzCL7w/EHSC-Banneer.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
