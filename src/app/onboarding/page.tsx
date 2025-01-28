"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTemperalOnboardingData } from "./stepConfig";

export default function Page() {
  const { character, color, nickname, treeCode } = getTemperalOnboardingData();
  console.log({ character, color, nickname, treeCode });
  const router = useRouter();

  useEffect(() => {
    if (!character) {
      router.replace("/onboarding/character");
      return;
    }
    if (!color) {
      router.replace("/onboarding/color");
      return;
    }
    if (!nickname) {
      router.replace("/onboarding/nickname");
      return;
    }
    if (!treeCode) {
      router.replace("/onboarding/join");
      return;
    }
    router.replace("/main"); // 모든 정보가 작성된 유저라면 메인페이지(감나무)로 이동해야함.
  }, [character, color, nickname, router, treeCode]);

  return <div></div>;
}
