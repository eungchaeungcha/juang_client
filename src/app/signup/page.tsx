"use client";

import { FormProvider, useForm } from "react-hook-form";
import { HeaderLayout } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupAgreements from "./SignupAgreements";
import SignupInputGroup from "./SignupInputGroup";
import { SignupFormType, SignupSchema } from "./SignupSchema";

export default function Page() {
  const formMethods = useForm<SignupFormType>({
    resolver: zodResolver(SignupSchema),
    mode: "onBlur",
  });

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Title title="회원 가입하기" />
      <HeaderLayout.Content
        className="flex flex-col justify-between"
        as="form"
        onSubmit={formMethods.handleSubmit((data) => {
          console.log(data);
        })}>
        <FormProvider {...formMethods}>
          <SignupInputGroup />
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
