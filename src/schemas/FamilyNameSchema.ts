import { z } from "zod";

export const FamilyNameErrorMessage = {
  length: "감나무 이름은 10자이하여야 합니다. (공백 포함)",
  required: "감나무 이름을 작성해주세요.",
};

export const FamilyNameSchema = z.object({
  name: z
    .string()
    .min(1, FamilyNameErrorMessage.required)
    .max(10, FamilyNameErrorMessage.length),
});

export type FamilyNameFormType = z.infer<typeof FamilyNameSchema>;
