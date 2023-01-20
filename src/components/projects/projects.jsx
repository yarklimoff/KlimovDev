import {Swiper, SwiperSlide} from "swiper/react";
import './style.css';
import 'swiper/css';
import image1 from '../../images/projects/project-1.PNG'
import image2 from '../../images/projects/project-2.PNG';

const slides = [image1, image2];

export default function Carousel(){
  return (
    <Swiper
      loop
      spaceBetween={10}
      slidesPerView={2}
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <img src={slide}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}