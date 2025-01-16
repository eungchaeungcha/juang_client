"use client";

import HeaderLayout from "@/components/layouts/HeaderLayout";
import CharactorSelect from "../CharactorSelect";
import { useState } from "react";
import CustomCharactor from "@/components/CustomCharactor";
import ColorSelect from "../ColorSelect";
import { FaDice } from "react-icons/fa";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { CHARACTOR_COLORS } from "@/constants/charactor";
import useStep from "@/hooks/useStep";

export default function Page() {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [colorCode, setColorCode] = useState("#ff9a57");

  const {
    currentStep,
    canGoNextStep,
    canGoPrevStep,
    goNextStep,
    goPrevStep,
    showStepContent,
  } = useStep({
    maxStep: 3,
    validators: [() => Boolean(selectedId), () => Boolean(colorCode)],
  });

  const handleClickRandom = () => {
    setSelectedId(`charactor${getRandomNumber(1, 9)}`);
    setColorCode(Object.values(CHARACTOR_COLORS)[getRandomNumber(1, 9)]);
  };

  return (
    <HeaderLayout
      title="내 감 캐릭터 만들기"
      progress={`${currentStep}/3`}
      className="flex-col-center">
      <div className="w-full flex-col-center gap-6 p-6">
        <CustomCharactor
          className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
          charId={selectedId}
          color={colorCode}
        />
        {currentStep < 3 && (
          <button
            className="styleset--button gap-3 px-4 py-2"
            onClick={handleClickRandom}>
            <FaDice className="text-3xl" />
            랜덤 캐릭터 보기
          </button>
        )}
      </div>
      <div className="w-full">
        {showStepContent(
          <CharactorSelect
            value={selectedId}
            onChange={setSelectedId}
          />,
          <ColorSelect
            value={colorCode}
            onChange={setColorCode}
          />,
          <div>hello!</div>
        )}
      </div>
      <div className="flex-row-center w-full gap-4 p-4">
        <button
          className="styleset--button-full"
          disabled={!canGoPrevStep}
          onClick={goPrevStep}>
          이전
        </button>
        <button
          className="styleset--button-full"
          disabled={!canGoNextStep}
          onClick={goNextStep}>
          다음
        </button>
      </div>
    </HeaderLayout>
  );
}
