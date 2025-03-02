import { redirect } from "next/navigation";
import { routePaths } from "@/constants/route";
import { usersApi } from "./users";

export const checkOnboarding = async () => {
  const { characterId, nickName, familyId } = await usersApi.getUser();

  if (!characterId) redirect(routePaths.private.onboardingCharacter);
  if (!nickName) redirect(routePaths.private.onboardingNickname);
  if (!familyId) redirect(routePaths.private.onboardingFamily);
  redirect(routePaths.private.main);
};
