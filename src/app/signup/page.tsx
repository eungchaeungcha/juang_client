"use client";

import { FormProvider, useForm } from "react-hook-form";
import { HeaderLayout } from "@/components";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPostBody } from "@/types/request";
import PasswordInput from "./PasswordInput";
import SignupAgreements from "./SignupAgreements";
import { SignupFormType, SignupSchema } from "./SignupSchema";
import UsernameInput from "./UsernameInput";

export default function Page() {
  const formMethods = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema),
    mode: "onBlur",
  });

  const onSignup = async ({ username, password }: SignupFormType) => {
    const response = await api.post<RegisterPostBody, void>("auth/register", {
      username,
      password,
    });
    console.log(response);
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
              다음
            </button>
          </div>
        </FormProvider>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
