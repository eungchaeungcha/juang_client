"use client";

import { useEffect } from "react";
import clsx from "clsx";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { CustomCharacter } from "@/components/ui";
import { CharacterName, CharacterNameType } from "@/schemas/CharacterSchema";

interface CharactorSelectProps {
  value?: CharacterNameType;
  onChange?: (name: CharacterNameType) => void;
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
    <div
      className="styleset--click"
      onClick={() => {
        swiper.slideToLoop(slideIndex);
      }}>
      {children}
    </div>
  );
};

export default function CharactorSelect({
  value,
  onChange,
}: CharactorSelectProps) {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={12}
      centeredSlides
      loop>
      {Array.from({ length: 9 }).map((_, i) => {
        const name = CharacterName.options[i];
        return (
          <SwiperSlide
            key={name}
            className="max-w-28"
            onClick={() => {
              onChange?.(name);
            }}>
            <CharactorWrapper
              isSelected={name === value}
              slideIndex={i}>
              <CustomCharacter
                name={name}
                className={clsx(
                  "rounded-full w-32 h-32 p-3 cursor-pointer flex-shrink-0 flex-grow",
                  {
                    "opacity-40 ": value && value !== name,
                    "opacity-100": value === name || !value,
                  },
                )}
              />
            </CharactorWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
