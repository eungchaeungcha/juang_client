"use client";

import Link from "next/link";
import { HeaderLayout, customToast } from "@/components";

export default function Home() {
  const notify = () => customToast.success("토스트!");

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Title title="홈 화면" />
      <HeaderLayout.Content className="flex-col-center p-4 gap-4">
        <Link
          className="styled-btn--orange w-full"
          href="/login">
          로그인
        </Link>
        <Link
          className="styled-btn--orange w-full"
          href="/signup">
          회원가입
        </Link>
        <Link
          className="styled-btn--orange w-full"
          href="/onboarding">
          시작하기
        </Link>
        <button
          className="styled-btn--orange w-full"
          onClick={notify}>
          토스트 띄우기
        </button>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
