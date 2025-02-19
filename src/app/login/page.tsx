import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <div className="w-full h-full flex-col-center">
      <div className="relative w-1/2 aspect-square mb-8 max-w-[180px]">
        <Image
          src="/assets/우리집감나무.png"
          alt="로그인 이미지"
          fill
        />
      </div>
      <LoginForm />
      <div className="text-xs text-gray-dark mt-2">
        계정이 없나요?
        <Link
          href="/signup"
          className="font-bold ml-1 text-blue-500">
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
