"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { BallonBox, LinkButton } from "@/components";
import FixedInput from "@/components/FixedInput";
import { NicknameFormType } from "@/types/form";

export default function Page() {
  const {
    register,
    formState: { isDirty, isValid },
  } = useForm<NicknameFormType>();

  return (
    <>
      <div>
        <BallonBox
          dir="up"
          className="text-center w-4/5 rounded-xl bg-gray-light p-4 break-keep">
          나를
          <span className="text-orange-secondray"> 잘 나타낼 수 있는 별명</span>
          을 지어주세요!
        </BallonBox>
      </div>
      <div className="px-8">
        <FixedInput
          {...register("nickname", {
            required: true,
          })}
          placeholder="둥글둥글 빤딱빤딱한"
          suffix="감"
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href="color"
          className="styled-btn--orange w-full">
          이전
        </Link>
        <LinkButton
          href="family"
          className="styled-btn--orange w-full"
          disabled={!(isDirty && isValid)}>
          다음
        </LinkButton>
      </div>
    </>
  );
}
