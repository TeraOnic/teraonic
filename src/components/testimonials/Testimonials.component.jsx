import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialBox from "./core/Testimonial-box.component";

import testimonials from "./data/testimonials";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-lg text-center mb-8 font-poppins">
        Client Testimonials
      </h1>
      <section className="w-full px-4 mb-20">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          style={{ width: "100%" }}
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
