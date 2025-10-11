import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TestimonialBox from "./core/Testimonial-box.component";

import testimonials from "./data/testimonials";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-lg text-center mb-20 font-poppins">
        Client Testimonials
      </h1>
      <section className="mb-20 mx-32 flex justify-between">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialBox
                pic={testimonial.pic}
                name={testimonial.name}
                designation={testimonial.designation}
                stars={testimonial.stars}
                testimonial={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
