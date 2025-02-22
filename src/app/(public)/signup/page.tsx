"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { authApi } from "@/services";
import { HeaderLayout, Spinner, customToast } from "@/components";
import PasswordInput from "./PasswordInput";
import SignupAgreements from "./SignupAgreements";
import { SignupFormType, SignupSchema } from "./SignupSchema";
import UsernameInput from "./UsernameInput";

export default function Page() {
  const router = useRouter();

  const formMethods = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema),
    mode: "onBlur",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authApi.postRegister,
    onSuccess: () => {
      customToast.success("가입이 완료되었습니다.");
      router.push("/login");
    },
    onError: () => {
      // TODO: 임시 에러 처리
      customToast.error("다시 시도해주세요.");
    },
  });

  const onSignup = ({ username, password }: SignupFormType) => {
    mutate({ username, password });
  };

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Title title="회원 가입하기" />
      <HeaderLayout.Content
        className="flex flex-col justify-between"
        as="form"
        onSubmit={formMethods.handleSubmit(onSignup)}>
        <FormProvider {...formMethods}>
          <div className="px-8 py-10 flex flex-col justify-center gap-10">
            <UsernameInput />
            <PasswordInput />
          </div>
          <div className="styled-hr" />
          <SignupAgreements />
          <div className="w-full flex items-end p-8">
            <button
              type="submit"
              className={clsx("styled-btn--orange w-full h-11", {
                "pointer-events-none": isPending,
              })}
              disabled={!formMethods.formState.isValid}>
              {isPending ? <Spinner /> : "완료"}
            </button>
          </div>
        </FormProvider>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
