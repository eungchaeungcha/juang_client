"use client";

import { FormProvider, useForm } from "react-hook-form";
import { HeaderLayout } from "@/components";
import authApi from "@/services/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import PasswordInput from "./PasswordInput";
import SignupAgreements from "./SignupAgreements";
import { SignupFormType, SignupSchema } from "./SignupSchema";
import UsernameInput from "./UsernameInput";

export default function Page() {
  const formMethods = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema),
    mode: "onBlur",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authApi.postRegister,
    onSuccess: () => {
      console.log("signup success");
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
              className="styled-btn--orange w-full"
              disabled={!formMethods.formState.isValid}>
              {isPending ? "로딩중" : "다음"}
            </button>
          </div>
        </FormProvider>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
