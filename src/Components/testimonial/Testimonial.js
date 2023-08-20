import React from "react";
import "./Testimonial.css";

import { TestimonialContent } from "../../content";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {TestimonialContent.map((item, index) => {
          return (
            <SwiperSlide className="testimonial" key={index + 1}>
              <div className="client__avatar">
                <img src={item.image} alt="Client Avatar" />
              </div>
              <h5 className="client__name">{item._name}</h5>
              <small className="client_review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
