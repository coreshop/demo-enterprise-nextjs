'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { Slide} from "./Slide/Slide";


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.scss';

import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import {SwiperModule} from "swiper/types";

register();

interface CarouselProps {
  height?: 'auto' | 'half' | 'full' | 'square',
  showSlides: number,
  showNavigation?: boolean,
  showPagination?: boolean,
  autoplay?: boolean,
  autoplayDelay: number,
  loop?: boolean,
  data: {
    id: number,
    dark: boolean,
    headline: string,
    lead: string,
    imageSrc: string | null | undefined
  }[]
}
export const CoreCarousel = ({
   height,
   showSlides,
    showNavigation = true,
    showPagination = true,
    autoplay = false,
    autoplayDelay = 5000,
    loop = false,
    data
 }: CarouselProps) => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    register()

  }, []);

    const navModules: SwiperModule[] = showNavigation ? [Navigation] : [];
    const pagModules: SwiperModule[] = showPagination ? [Pagination] : [];
  return (
    <Swiper
      ref={swiperElRef}
      slidesPerView={showSlides}
      spaceBetween={30}
      autoplay={autoplay ? { delay: autoplayDelay } : false}
      loop={loop}
      navigation={showNavigation}
      pagination={showPagination}
      modules={[...navModules, ...pagModules]}
      className={`carousel-height-${height}`}
    >
      {data.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide {...slide} height={height}  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};