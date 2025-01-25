"use client";

import { ColorSelect } from "@/components";
import { useOnboardingContext } from "../context";
import Link from "next/link";
import CharacterPreview from "../CharacterPreview";

export default function Page() {
  const { color, setOnboarding } = useOnboardingContext();

  return (
    <>
      <CharacterPreview />
      <ColorSelect
        value={color}
        onChange={(value) => {
          setOnboarding("color", value);
        }}
      />
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href="character"
          className="styled-btn--orange w-full">
          이전
        </Link>
        <Link
          href="nickname"
          className="styled-btn--orange w-full">
          다음
        </Link>
      </div>
    </>
  );
}
