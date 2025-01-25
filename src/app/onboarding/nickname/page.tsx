"use client";

import { NicknameInput } from "@/components";
import Link from "next/link";
import CharacterPreview from "../CharacterPreview";

export default function Page() {
  return (
    <>
      <CharacterPreview />
      <NicknameInput />
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href="color"
          className="styled-btn--orange w-full">
          이전
        </Link>
        <Link
          href="join"
          className="styled-btn--orange w-full">
          다음
        </Link>
      </div>
    </>
  );
}
