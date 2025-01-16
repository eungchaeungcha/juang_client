"use client";

import CustomCharactor from "@/components/CustomCharactor";
import clsx from "clsx";
import { useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

interface CharactorSelectProps {
  value?: string;
  onChange?: (id: string) => void;
}

interface CharactorWrapperProps {
  slideIndex: number;
  isSelected: boolean;
  children: React.ReactNode;
}

const CharactorWrapper = ({
  slideIndex,
  isSelected,
  children,
}: CharactorWrapperProps) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (isSelected) {
      swiper.slideToLoop(slideIndex);
    }
  }, [isSelected, slideIndex, swiper]);

  return (
    <button
      className="styleset--click"
      onClick={() => {
        swiper.slideToLoop(slideIndex);
      }}>
      {children}
    </button>
  );
};

export default function CharactorSelect({
  value,
  onChange,
}: CharactorSelectProps) {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides
      loop>
      {Array.from({ length: 9 }).map((_, i) => {
        const charId = `charactor${i + 1}`;
        return (
          <SwiperSlide
            key={charId}
            className="max-w-28"
            onClick={() => {
              onChange?.(charId);
            }}>
            <CharactorWrapper
              isSelected={charId === value}
              slideIndex={i}>
              <CustomCharactor
                charId={charId}
                className={clsx(
                  "rounded-full w-28 h-28 p-3 cursor-pointer flex-shrink-0 flex-grow",
                  {
                    "opacity-40 ": value && value !== charId,
                    "opacity-100": value === charId || !value,
                  }
                )}
              />
            </CharactorWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
