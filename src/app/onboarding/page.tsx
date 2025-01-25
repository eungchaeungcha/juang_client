"use client";

import { FaDice } from "react-icons/fa";
import { useOnboardingContext } from "./context";
import { CustomCharacter } from "@/components";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { CHARACTER_COLORS } from "@/constants/character";

export default function Page() {
  const { character, color, setOnboarding } = useOnboardingContext();

  const handleRandomizeCharacter = () => {
    setOnboarding("character", `character${getRandomNumber(1, 9)}`);
    setOnboarding(
      "color",
      Object.values(CHARACTER_COLORS)[getRandomNumber(1, 9)]
    );
  };

  return (
    <div className="w-full flex-col-center gap-8 pt-12 pb-8">
      <CustomCharacter
        className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
        charId={character}
        color={color}
      />
      <button
        className="styled-btn--orange gap-2"
        onClick={handleRandomizeCharacter}>
        <FaDice className="text-2xl" />
        랜덤 캐릭터 보기
      </button>
    </div>
  );
}
