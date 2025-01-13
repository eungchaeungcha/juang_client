"use client";

import CharactorSelection from "@/components/CharactorSelection";
import CustomCharactor from "@/components/CustomCharactor";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import clsx from "clsx";
import { useState } from "react";

export default function Page() {
  const [selectedCharactor, setSelectedCharactor] = useState(0);

  return (
    <HeaderLayout
      title="내 감 캐릭터 만들기"
      progress="1/5"
      className="flex-col-center">
      <CharactorSelection />
      {/* <div className="grid grid-cols-3 gap-2 mx-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <CustomCharactor
            key={`charactor-${i}`}
            type={i}
            className={clsx(
              "border-2 border-gray-light rounded-3xl aspect-square p-2 cursor-pointer hover:bg-gray-light",
              i === selectedCharactor && "border-orange-primary"
            )}
            onClick={() => {
              setSelectedCharactor(i);
            }}
          />
        ))}
      </div> */}
    </HeaderLayout>
  );
}
