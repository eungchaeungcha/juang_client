"use client";

import Layout from "@/components/layout/HeaderLayout";
import CharactorSelect from "../CharactorSelect";
import CustomCharactor from "@/components/CustomCharactor";
import ColorSelect from "../ColorSelect";
import { FaDice } from "react-icons/fa";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { CHARACTOR_COLORS } from "@/constants/charactor";
import useStep from "@/hooks/useStep";
import NicknameInput from "../NicknameInput";
import { useForm } from "react-hook-form";
import { ProfileFormType } from "@/types/form";

export default function Page() {
  const { register, setValue, watch, handleSubmit } = useForm<ProfileFormType>({
    defaultValues: {
      color: "#ff9a57",
    },
  });

  const stepController = useStep({
    maxStep: 3,
    validators: [
      () => Boolean(watch("charactor")),
      () => Boolean(watch("color")),
    ],
  });

  const handleRandomizeCharacter = () => {
    setValue("charactor", `charactor${getRandomNumber(1, 9)}`);
    setValue("color", Object.values(CHARACTOR_COLORS)[getRandomNumber(1, 9)]);
  };

  const onSubmit = (data: ProfileFormType) => console.log(data);

  const renderCharacterPreview = () => (
    <div className="w-full flex-col-center gap-8 pt-12 pb-8">
      <CustomCharactor
        className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light"
        charId={watch("charactor")}
        color={watch("color")}
      />
      {stepController.currentStep < 3 && (
        <button
          className="styled-btn--orange gap-2"
          onClick={handleRandomizeCharacter}>
          <FaDice className="text-2xl" />
          랜덤 캐릭터 보기
        </button>
      )}
    </div>
  );

  const renderStepContent = () => (
    <div
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}>
      {stepController.showStepContent(
        <CharactorSelect
          value={watch("charactor")}
          onChange={(value) => setValue("charactor", value)}
        />,
        <ColorSelect
          value={watch("color")}
          onChange={(value) => setValue("color", value)}
        />,
        <NicknameInput {...register("nickname")} />
      )}
    </div>
  );

  const renderNavigationButtons = () => (
    <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
      {stepController.canGoPrevStep && (
        <button
          className="styled-btn w-full bg-gray-primary text-white"
          onClick={stepController.goPrevStep}>
          이전
        </button>
      )}
      {stepController.canGoNextStep && (
        <button
          className="styled-btn--orange w-full"
          onClick={stepController.goNextStep}>
          다음
        </button>
      )}
      {stepController.currentStep === 3 && (
        <button
          className="styled-btn--orange w-full"
          onClick={handleSubmit(onSubmit)}>
          완료
        </button>
      )}
    </div>
  );

  return (
    <Layout.Wrapper>
      <Layout.Progressbar
        currentStep={stepController.currentStep}
        maxStep={3}
      />
      <Layout.Title title="내 감 캐릭터 만들기" />
      {stepController.currentStep === 3 && (
        <Layout.Top className="text-2xl p-10 break-keep">
          나를{" "}
          <span className="text-orange-primary font-bold">
            잘 나타낼 수 있는{" "}
          </span>
          별명을 정해주세요!
        </Layout.Top>
      )}
      <Layout.Content className="flex flex-col justify-between">
        {renderCharacterPreview()}
        {renderStepContent()}
        {renderNavigationButtons()}
      </Layout.Content>
    </Layout.Wrapper>
  );
}
