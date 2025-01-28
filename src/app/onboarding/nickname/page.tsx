"use client";

import { NicknameInput } from "@/components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { NicknameFormType } from "@/types/form";
import LinkButton from "@/components/LinkButton";
import { CHARACTER_COLORS } from "@/constants/character";
import CharacterPreview from "../components/CharacterPreview";

const CHARACTER_RESULT = {
  character: "character1",
  color: CHARACTER_COLORS.orange,
};
// 임시, 캐릭터 생성 결과는 API 요청해서 받아와야 함

export default function Page() {
  const {
    register,
    formState: { isDirty, isValid },
  } = useForm<NicknameFormType>();

  return (
    <>
      <CharacterPreview {...CHARACTER_RESULT} />
      <NicknameInput
        {...register("nickname", {
          required: true,
        })}
      />
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
