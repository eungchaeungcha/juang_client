import React from "react";
import { HeaderLayout } from "@/components/ui";

const pageTitle = {
  family: "우리 가족 설정",
  me: "내 정보 설정",
  default: "설정하기",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.TitleByPage
        titleMap={pageTitle}
        prev
      />
      <HeaderLayout.Content>{children}</HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
