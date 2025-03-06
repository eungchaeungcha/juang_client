"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { FaDice } from "react-icons/fa";
import { CustomCharacter } from "@/components/ui";
import { getRandomNumber } from "@/utils/getRandomNumber";
import {
  CharacterColor,
  CharacterFormType,
  CharacterName,
} from "@/schemas/CharacterSchema";

export default function CharacterPreview() {
  const { setValue } = useFormContext<CharacterFormType>();
  const characterValues = useWatch<CharacterFormType>();
  const randomizeCharacter = () => {
    setValue("name", CharacterName.options[getRandomNumber(0, 8)]);
    setValue("color", CharacterColor.options[getRandomNumber(0, 8)]);
  };

  return (
    <div className="w-full flex-col-center gap-8 pt-12 pb-8">
      <CustomCharacter
        className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
        {...characterValues}
      />
      <button
        className="styled-btn--orange gap-2"
        onClick={randomizeCharacter}>
        <FaDice className="text-2xl" />
        랜덤 캐릭터 보기
      </button>
    </div>
  );
}
