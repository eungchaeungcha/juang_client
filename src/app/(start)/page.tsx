import { redirect } from "next/navigation";
import { usersApi } from "@/services";
import { routePaths } from "@/constants/route";

export default async function Page() {
  const { familyId } = await usersApi.getUser();

  if (!familyId) redirect(routePaths.private.onboarding);
  redirect(routePaths.withQueryParams.treeWithId(familyId));
}
