import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { routePaths } from "@/constants/route";

export default function Page() {
  const buttonClassName =
    "styled-click text-white rounded-3xl flex-row-center gap-3 py-4 px-6 font-bold text-xl break-keep border-black-soft border-4 border-opacity-5";
  return (
    <div className="flex-col-center w-full h-full gap-12">
      <div className="flex-col-center gap-2 w-full">
        <div className="text-gray-dark">아직 개설된 감나무가 없나요?</div>
        <Link
          href={routePaths.private.onboardingFamilyCreate}
          className={twMerge(buttonClassName, "bg-green-primary")}>
          우리 가족 감나무 만들기
          <FaArrowCircleRight className="text-2xl" />
        </Link>
      </div>
      <div className="flex-col-center gap-2 w-full">
        <div className="text-gray-dark">이미 감나무 코드를 받으셨나요?</div>
        <Link
          href={routePaths.private.onboardingFamilyJoin}
          className={twMerge(buttonClassName, "bg-orange-primary")}>
          코드 입력하고 참여하기
          <FaArrowCircleRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
