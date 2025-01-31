"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { BallonBox, LinkButton } from "@/components";
import { CHARACTER_COLORS } from "@/constants/character";
import { NicknameFormType } from "@/types/form";
import CharacterPreview from "../components/CharacterPreview";
import { getTemperalOnboardingData } from "../stepConfig";

const CHARACTER_RESULT = {
  character: getTemperalOnboardingData().character ?? "character1",
  color: getTemperalOnboardingData().color ?? CHARACTER_COLORS.orange,
};
// 임시, 캐릭터 생성 결과는 API 요청해서 받아와야 함

export default function Page() {
  const {
    register,
    formState: { isDirty, isValid },
  } = useForm<NicknameFormType>({
    defaultValues: {
      nickname: getTemperalOnboardingData().nickname ?? "",
    },
  });

  return (
    <>
      <div>
        <CharacterPreview {...CHARACTER_RESULT} />
        <BallonBox
          dir="up"
          className="text-center w-4/5 rounded-xl bg-gray-light p-4 break-keep">
          나를
          <span className="text-orange-secondray"> 잘 나타낼 수 있는 별명</span>
          을 지어주세요!
        </BallonBox>
      </div>
      <div className="px-8">
        <input
          {...register("nickname", {
            required: true,
          })}
          placeholder="별명을 입력하세요"
          className="styled-input--lg text-center"
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href="color"
          className="styled-btn--orange w-full">
          이전
        </Link>
        <LinkButton
          href="join"
          className="styled-btn--orange w-full"
          disabled={!(isDirty && isValid)}>
          다음
        </LinkButton>
      </div>
    </>
  );
}
