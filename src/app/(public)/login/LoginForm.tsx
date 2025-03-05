"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { authApi } from "@/api";
import { useHandleAuth } from "@/services/auth";
import { Spinner, customToast } from "@/components";
import { PostLoginRequestBody } from "@/types/api";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<PostLoginRequestBody>();
  const { handleLogin } = useHandleAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: authApi.postLogin,
    onSuccess: handleLogin,
    onError: () => {
      // TODO: 에러 분기 처리 필요 (존재하지 않는 아이디, 네트워크 오류 등등)
      customToast.error("다시 시도해주세요.");
    },
  });

  const onSubmit = (data: PostLoginRequestBody) => {
    mutate(data);
  };

  return (
    <form
      className="w-full flex-col-center px-10 gap-2"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username")}
        className="styled-input"
        placeholder="아이디"
      />
      <input
        {...register("password")}
        className="styled-input"
        placeholder="비밀번호"
        type="password"
      />
      <div className="w-full px-2 mt-2">
        <button className="styled-btn--orange w-full">
          {isPending ? <Spinner /> : "로그인"}
        </button>
      </div>
    </form>
  );
}
