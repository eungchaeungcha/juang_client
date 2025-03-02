"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { HeaderLayout } from "@/components";

const pageTitle = {
  character: "감 캐릭터 만들기",
  nickname: "별명 정하기",
  family: "감나무 들어가기",
};
const pageSegments = Object.keys(pageTitle);
type OnboardingSegment = keyof typeof pageTitle;

const isValidSegment = (
  segment: string | null,
): segment is OnboardingSegment => {
  return segment !== null && pageSegments.includes(segment);
};

export default function HeaderLayoutData() {
  const stepSegment = useSelectedLayoutSegment();

  if (!isValidSegment(stepSegment)) {
    return null;
  }

  return (
    <>
      <HeaderLayout.Progressbar
        currentStep={pageSegments.indexOf(stepSegment) + 1}
        maxStep={3}
      />
      <HeaderLayout.Title title={pageTitle[stepSegment]} />
    </>
  );
}
