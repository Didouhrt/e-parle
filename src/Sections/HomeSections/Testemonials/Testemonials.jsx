import  { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./Testemonials.css";
import { testimonial_data } from "../../../Utils/Testemonials_data";
import TestemonialCards from "../../../Component/TestemonialCards/TestemonialCards";

const Testemonials = () => {
  const swiperRef = useRef(null);

  const handleSlidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="testemonials_section">
      <div className="container testemonials_container">
        <div className="heading_btn flex_center ">
          <div className="heading_title text_center">
            <h2>Des étudiants Heureux</h2>
            <p>Lisez ce que disent nos étudiants de leur expérience.</p>
          </div>
          <div className="testemonials_btn_container flex gap1">
            <button onClick={handleSlidePrev} className="primary_btn">
              <span>
                <FaArrowLeft />
              </span>
            </button>
            <button onClick={handleSlideNext} className="primary_btn">
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="testo">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={35}
            breakpoints={{
              480: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              750: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonial_data.map((card, i) => (
              <SwiperSlide key={i}>
                <TestemonialCards card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
