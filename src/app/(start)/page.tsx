import HeaderLayout from "@/components/layouts/HeaderLayout";
import Link from "next/link";

export default function Home() {
  return (
    <HeaderLayout
      title="홈화면"
      progress="1/5">
      <div className="flex-col-center p-2 gap-2">
        <Link
          className="styleset--button-full"
          href="/login">
          로그인
        </Link>
        <Link
          className="styleset--button-full"
          href="/signup">
          회원가입
        </Link>
        <Link
          className="styleset--button-full"
          href="/profile/create">
          프로필 생성
        </Link>
      </div>
    </HeaderLayout>
  );
}
