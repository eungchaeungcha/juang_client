import Layout from "@/components/layout/HeaderLayout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout.Wrapper>
      <Layout.Title title="홈 화면" />
      <Layout.Content className="flex-col-center p-4 gap-4">
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
          href="/profile/create">
          프로필 생성
        </Link>
      </Layout.Content>
    </Layout.Wrapper>
  );
}
