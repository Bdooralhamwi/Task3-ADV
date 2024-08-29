import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";
import { Autoplay, Pagination } from "swiper/modules";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className="hero">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(/images/banner-01.jpg)",
          }}
        >
          <div className="container">
            <p>
              Tornato, <span>Canada</span>
            </p>
            <h1>
              HURRY!
              <br />
              GET THE
              <br />
              BEST VILLA
              <br />
              FOR YOU
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(/images/banner-02.jpg)",
          }}
        >
          <div className="container">
            <p>
              Tornato, <span>Canada</span>
            </p>
            <h1>
              HURRY!
              <br />
              GET THE
              <br />
              BEST VILLA
              <br />
              FOR YOU
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(/images/banner-03.jpg)",
          }}
        >
          <div className="container">
            <p>
              Tornato, <span>Canada</span>
            </p>
            <h1>
              HURRY!
              <br />
              GET THE
              <br />
              BEST VILLA
              <br />
              FOR YOU
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="prev" onClick={() => swiper && swiper.slidePrev()}>
        <KeyboardArrowLeft />
      </button>
      <button className="next" onClick={() => swiper && swiper.slideNext()}>
        <KeyboardArrowRight />
      </button>
      <div className="point">
        <div className="point-1"></div>
        <div className="point-2"></div>
        <div className="point-3"></div>
      </div>
    </div>
  );
};

export default Hero;
