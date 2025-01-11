"use client";

import { LoginFormType } from "@/types/form";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormType>();

  const onSubmit = (data: LoginFormType) => {
    console.log("fetch login data", data); // TODO: 로그인 비동기 작업
  };

  return (
    <form
      className="w-full flex-col-center px-10 gap-2"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("id")}
        className="styleset--input"
        placeholder="아이디"
      />
      <input
        {...register("password")}
        className="styleset--input"
        placeholder="비밀번호"
        type="password"
      />
      <div className="w-full px-2 mt-2">
        <button className="styleset--button">로그인</button>
      </div>
    </form>
  );
}
