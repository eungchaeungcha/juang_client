import React from "react";
import { HeaderLayout } from "@/components/ui";

const pageTitle = {
  family: "우리 가족 설정",
  me: "내 정보 설정",
  default: "설정하기",
  "me/nickname": "별명 수정하기",
  "me/character": "캐릭터 수정하기",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.TitleByPage
        titleMap={pageTitle}
        prev
      />
      <HeaderLayout.Content className="flex flex-col items-center">
        {children}
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
