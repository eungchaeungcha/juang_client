import { redirect } from "next/navigation";
import { routePaths } from "@/constants/route";
import { usersApi } from "./users";

export const redirectByUserData = async () => {
  const { characterId, nickName, familyId } = await usersApi.getUser();

  if (!characterId) redirect(routePaths.private.onboardingCharacter);
  if (!nickName) redirect(routePaths.private.onboardingNickname);
  if (!familyId) redirect(routePaths.private.onboardingFamily);

  redirect(routePaths.withQueryParams.treeWithId(familyId));
};

export const redirectTreePageWithId = async () => {
  const { familyId } = await usersApi.getUser();
  if (familyId) {
    redirect(routePaths.withQueryParams.treeWithId(familyId));
  } else {
    redirect(routePaths.private.onboarding);
  }
};
