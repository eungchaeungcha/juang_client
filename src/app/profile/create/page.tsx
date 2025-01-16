"use client";

import HeaderLayout from "@/components/layouts/HeaderLayout";
import CharactorSelect from "../CharactorSelect";
import { useState } from "react";
import CustomCharactor from "@/components/CustomCharactor";
import ColorSelect from "../ColorSelect";
import { FaDice } from "react-icons/fa";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { CHARACTOR_COLORS } from "@/constants/charactor";

export default function Page() {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [colorCode, setColorCode] = useState("#ff9a57");

  const handleClickRandom = () => {
    setSelectedId(`charactor${getRandomNumber(1, 9)}`);
    setColorCode(Object.values(CHARACTOR_COLORS)[getRandomNumber(1, 9)]);
  };

  return (
    <HeaderLayout
      title="내 감 캐릭터 만들기"
      progress="1/5"
      className="flex-col-center">
      <div className="w-full flex-col-center gap-6 p-6">
        <CustomCharactor
          className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
          charId={selectedId}
          color={colorCode}
        />
        <button
          className="styleset--button gap-3 px-4 py-2"
          onClick={handleClickRandom}>
          <FaDice className="text-3xl" />
          랜덤 캐릭터 보기
        </button>
      </div>
      <div className="w-full h-full">
        <CharactorSelect
          value={selectedId}
          onChange={setSelectedId}
        />
        <ColorSelect
          value={colorCode}
          onChange={setColorCode}
        />
      </div>
    </HeaderLayout>
  );
}
