"use client";

import { useCallback } from "react";
import { useClientRedirect } from "@/hooks/useClientRedirect";
import { routePathes } from "@/constants/route";
import { useUserDataStore } from "@/store/userDataStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userData } = useUserDataStore();
  const { characterId, nickname, familyId } = userData || {};

  const redirectPage = useCallback(() => {
    if (!characterId) {
      return "/onboarding/character";
    }
    if (!nickname) {
      return "/onboarding/nickname";
    }
    if (!familyId) {
      return "/onboarding/join";
    }
    return routePathes.private.main;
  }, [characterId, familyId, nickname]);

  const { ClientRedirect } = useClientRedirect(redirectPage);

  return <ClientRedirect>{children}</ClientRedirect>;
}
