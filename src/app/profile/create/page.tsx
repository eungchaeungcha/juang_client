"use client";

import Layout from "@/components/layout/HeaderLayout";
import CharactorSelect from "../CharactorSelect";
import { useState } from "react";
import CustomCharactor from "@/components/CustomCharactor";
import ColorSelect from "../ColorSelect";
import { FaDice } from "react-icons/fa";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { CHARACTOR_COLORS } from "@/constants/charactor";
import useStep from "@/hooks/useStep";
import NicknameInput from "../NicknameInput";

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
    <Layout.Wrapper>
      <Layout.Progressbar
        currentStep={currentStep}
        maxStep={3}
      />
      <Layout.Title title="내 감 캐릭터 만들기" />
      {currentStep === 3 && (
        <Layout.Top className="text-2xl p-10 break-keep">
          나를{" "}
          <span className="text-orange-primary font-bold">
            잘 나타낼 수 있는{" "}
          </span>
          별명을 정해주세요!
        </Layout.Top>
      )}
      <Layout.Content className="flex flex-col justify-between">
        <div className="w-full flex-col-center gap-8 pt-12 pb-8">
          <CustomCharactor
            className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
            charId={selectedId}
            color={colorCode}
          />
          {currentStep < 3 && (
            <button
              className="styled-btn--orange gap-2"
              onClick={handleClickRandom}>
              <FaDice className="text-2xl" />
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
            <NicknameInput />
          )}
        </div>
        <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
          {canGoPrevStep && (
            <button
              className="styled-btn w-full bg-gray-primary text-white"
              onClick={goPrevStep}>
              이전
            </button>
          )}
          {canGoNextStep && (
            <button
              className="styled-btn--orange w-full"
              onClick={goNextStep}>
              다음
            </button>
          )}
          {currentStep === 3 && (
            <button className="styled-btn--orange w-full">완료</button>
          )}
        </div>
      </Layout.Content>
    </Layout.Wrapper>
  );
}
