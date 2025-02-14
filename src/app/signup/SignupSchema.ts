import { z } from "zod";

export const SignupRegex = {
  username: /^[a-z0-9]{6,12}$/,
  password:
    /^(?=(?:.*[a-zA-Z].*[\d!@#$%^&*?_]|.*\d.*[a-zA-Z!@#$%^&*?_]|.*[!@#$%^&*?_].*[a-zA-Z\d])).{8,20}$/,
};

export const SignupErrorMessage = {
  username: "영소문자/숫자 조합의 6-12자",
  password: "특수문자(!@#$%^*+=-)/영문자/숫자 2개 이상의 조합을 사용한 8-20자",
  passwordCheck: "비밀번호가 일치하지 않습니다.",
  termsAgreement: "모든 필수약관에 동의해주세요.",
};

export const SignupSchema = z
  .object({
    username: z
      .string()
      .min(6, SignupErrorMessage.username)
      .max(12, SignupErrorMessage.username)
      .regex(SignupRegex.username, SignupErrorMessage.username),

    password: z
      .string()
      .min(8, SignupErrorMessage.password)
      .max(20, SignupErrorMessage.password)
      .regex(SignupRegex.password, SignupErrorMessage.password),

    passwordCheck: z.string(),

    termsAgreement: z.object({
      termsOfService: z.boolean().refine((value) => value === true, {
        message: SignupErrorMessage.termsAgreement,
      }),
      privacyPolicy: z.boolean().refine((value) => value === true, {
        message: SignupErrorMessage.termsAgreement,
      }),
      marketingInfo: z.boolean().optional(),
    }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: SignupErrorMessage.passwordCheck,
    path: ["passwordCheck"],
  });

export type SignupFormType = z.infer<typeof SignupSchema>;
