import { HeaderLayout } from "@/components";
import Link from "next/link";

export default function Home() {
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
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
