"use client";

import { CharacterSelect } from "@/components";
import Link from "next/link";
import { useOnboardingContext } from "../context";
import CharacterPreview from "../CharacterPreview";

export default function Page() {
  const { character, setOnboarding } = useOnboardingContext();

  return (
    <>
      <CharacterPreview />
      <div className="w-full">
        <CharacterSelect
          value={character}
          onChange={(value) => {
            setOnboarding("character", value);
          }}
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        {Boolean(character) && (
          <Link
            href="color"
            className="styled-btn--orange w-full">
            다음
          </Link>
        )}
      </div>
    </>
  );
}
