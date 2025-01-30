"use client";

import { CustomCharacter } from "@/components";
import { CHARACTER_COLORS } from "@/constants/character";
import { CharacterFormType } from "@/types/form";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { FaDice } from "react-icons/fa";

interface CharacterPreviewProps {
  character?: string;
  color?: string;
  onRandomize?: (values: CharacterFormType) => void;
}

export default function CharacterPreview({
  character,
  color,
  onRandomize,
}: CharacterPreviewProps) {
  const randomizeCharacter = () => {
    onRandomize?.({
      character: `character${getRandomNumber(1, 9)}`,
      color: Object.values(CHARACTER_COLORS)[getRandomNumber(1, 9)],
    });
  };

  return (
    <div className="w-full flex-col-center gap-8 pt-12 pb-8">
      <CustomCharacter
        className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
        charId={character}
        color={color}
      />
      {Boolean(onRandomize) && (
        <button
          className="styled-btn--orange gap-2"
          onClick={randomizeCharacter}>
          <FaDice className="text-2xl" />
          랜덤 캐릭터 보기
        </button>
      )}
    </div>
  );
}
