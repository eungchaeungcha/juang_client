import { Swiper, SwiperSlide } from "swiper/react";
import CustomCharactor from "./CustomCharactor";
import "swiper/css";

export default function CharactorSelection() {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      className="w-full h-fit">
      {Array.from({ length: 9 }).map((_, i) => (
        <SwiperSlide
          key={`charactor-slide-${i}`}
          className="duration-300 opacity-50 scale-75 py-5">
          <CustomCharactor type={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
