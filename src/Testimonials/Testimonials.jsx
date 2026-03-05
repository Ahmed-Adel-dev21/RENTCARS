import React from "react";
import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import card1 from "../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import card2 from "../assets/imges/landing-page/sec-6/girl.png";
import card3 from "../assets/imges/landing-page/sec-6/boy3.png";
import Contacts from "../Contacts/Contacts";




export default function Testimonials() {
  return (
    <>
    <div className={`container-fluid my-5 pt-5 ${styles.backImg}`}>
      
      <div className="d-grid my-3 gap-2 col-2 mx-auto">
        <button className={`btn text-primary ${styles.mainBg}`}>
          TESTIMONIALS
        </button>
      </div>

      <h2 className="text-center my-3 mb-5">
        What people say about us?
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2} // زي col-lg-6
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          992: { slidesPerView: 2 }, // lg
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="item bg-light-subtle shadow-lg rounded-4 d-flex">
            <div>
              <img className="w-100 h-100" src={card1} alt="person" />
            </div>
            <div className="p-3">
              <h3 className="fs-1">
                5.0 <span className="fs-5">stars</span>
              </h3>
              <div className="text-warning mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                “I feel very secure when using caretall's services. Your
                customer care team is very enthusiastic and the driver is
                always on time.”
              </p>
              <h4>Charlie Johnson</h4>
              <p className="text-muted">From New York, US</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="item bg-light-subtle shadow-lg rounded-4 d-flex">
            <div>
              <img className="w-100 h-100" src={card2} alt="person" />
            </div>
            <div className="p-3">
              <h3 className="fs-1">
                5.0 <span className="fs-5">stars</span>
              </h3>
              <div className="text-warning mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                “I feel very secure when using caretall's services. Your
                customer care team is very enthusiastic and the driver is
                always on time.”
              </p>
              <h4>Charlie Johnson</h4>
              <p className="text-muted">From New York, US</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-light-subtle shadow-lg rounded-4 d-flex">
            <div>
              <img className="w-100 h-100" src={card3} alt="person" />
            </div>
            <div className="p-3">
              <h3 className="fs-1">
                5.0 <span className="fs-5">stars</span>
              </h3>
              <div className="text-warning mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                “I feel very secure when using caretall's services. Your
                customer care team is very enthusiastic and the driver is
                always on time.”
              </p>
              <h4>Charlie Johnson</h4>
              <p className="text-muted">From New York, US</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    <Contacts/>
    </>
    
  );
}