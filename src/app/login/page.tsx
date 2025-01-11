"use client";

import Image from "next/image";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex-col-center">
      <div className="relative w-32 h-36">
        <Image
          src="/assets/home_icon.png"
          alt="로그인 이미지"
          fill
        />
      </div>
      <LoginForm />
      <div className="text-xs text-gray-dark">
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
