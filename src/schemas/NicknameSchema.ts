import { z } from "zod";

export const NicknameErrorMessage = {
  length: "닉네임은 8자이하여야 합니다. (공백 포함)",
  required: "닉네임을 작성해주세요.",
};

export const NicknameSchema = z.object({
  nickName: z
    .string()
    .min(1, NicknameErrorMessage.required)
    .max(8, NicknameErrorMessage.length),
});

export type NicknameFormType = z.infer<typeof NicknameSchema>;
