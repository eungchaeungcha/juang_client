"use client";

import CustomCharactor from "@/components/CustomCharactor";
import Layout from "@/components/layout/HeaderLayout";
import NicknameInput from "../NicknameInput";
import { useState } from "react";
import CharactorSelect from "../CharactorSelect";
import ColorSelect from "../ColorSelect";
import clsx from "clsx";

const DEFAULT_DATA = {
  charactor: "charactor1",
  color: "#ff9a57",
  nickname: "차차",
};

export default function Page() {
  const [target, setTarget] = useState("캐릭터");

  return (
    <Layout.Wrapper>
      <Layout.Title title="감 캐릭터 수정하기" />
      <Layout.Content>
        <div className="w-full flex-col-center p-8 gap-3">
          <CustomCharactor
            className="aspect-square w-[10rem] h-[10rem] p-6 rounded-full border-4 border-gray-light"
            charId={DEFAULT_DATA.charactor}
            color={DEFAULT_DATA.color}
          />
          <NicknameInput defaultValue={DEFAULT_DATA.nickname} />
          <div className="flex-row-center gap-2 mt-10">
            <button
              className={clsx("w-28 styled-btn text-white", {
                "bg-orange-primary": target === "캐릭터",
                "bg-gray-primary": target === "색상",
              })}
              onClick={() => setTarget("캐릭터")}>
              감 캐릭터
            </button>
            <button
              className={clsx("w-28 styled-btn text-white", {
                "bg-orange-primary": target === "색상",
                "bg-gray-primary": target === "캐릭터",
              })}
              onClick={() => setTarget("색상")}>
              색상
            </button>
          </div>
          <div className="w-full">
            {target === "캐릭터" && (
              <CharactorSelect value={DEFAULT_DATA.charactor} />
            )}
            {target === "색상" && <ColorSelect value={DEFAULT_DATA.color} />}
          </div>
        </div>
      </Layout.Content>
    </Layout.Wrapper>
  );
}
