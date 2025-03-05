import React, { Suspense } from "react";
import { FaDice } from "react-icons/fa";

function CharacterPageFallback() {
  return (
    <div className="w-full flex-col-center gap-8 pt-12 pb-8">
      <div className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light" />
      <div className="styled-btn--orange gap-2">
        <FaDice className="text-2xl" />
        랜덤 캐릭터 보기
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<CharacterPageFallback />}>{children}</Suspense>;
}
