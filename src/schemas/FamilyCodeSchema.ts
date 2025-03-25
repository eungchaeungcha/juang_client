import { z } from "zod";

export const FamilyCodeErrorMessage = {
  regex: "유효하지 않은 코드 형식입니다.",
};

export const FamilyCodeSchema = z.object({
  code: z.string().regex(/^[A-Za-z0-9]{6}$/, FamilyCodeErrorMessage.regex),
});

export type FamilyCodeFormType = z.infer<typeof FamilyCodeSchema>;
