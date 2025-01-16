"use client";

import CustomCharactor from "@/components/CustomCharactor";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import clsx from "clsx";

export default function Page() {
  return (
    <HeaderLayout
      title="내 감 캐릭터 만들기"
      progress="1/5"
      className="flex-col-center">
      <div className="grid grid-cols-3 gap-2 mx-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <CustomCharactor
            key={`charactor-${i}`}
            type={i}
            className={clsx(
              "border-2 border-gray-light rounded-3xl aspect-square p-3 cursor-pointer hover:bg-gray-light"
            )}
          />
        ))}
      </div>
    </HeaderLayout>
  );
}
