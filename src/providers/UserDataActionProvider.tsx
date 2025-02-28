"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/services";
import { useHandleAuth } from "@/hooks/useHandleAuth";
import { routePathes } from "@/constants/route";
import { GetUsersMeResponseBody } from "@/types/api";
import { useUserDataStore } from "@/store/userDataStore";

interface UserDataActionProviderProps {
  userData?: GetUsersMeResponseBody;
  children?: React.ReactNode;
}

const getRedirectPath = ({
  nickname,
  familyId,
  characterId,
}: GetUsersMeResponseBody) => {
  const onboardingPath = routePathes.private.onboarding;
  if (!characterId) {
    return onboardingPath + "/character";
  }
  if (!nickname) {
    return onboardingPath + "/nickname";
  }
  if (!familyId) {
    return onboardingPath + "/family";
  }
  return routePathes.private.main;
};

export default function UserDataActionProvider({
  userData,
  children,
}: UserDataActionProviderProps) {
  const { handleLogout } = useHandleAuth();
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
  });

  const router = useRouter();
  const pathname = usePathname();

  const { setUserData } = useUserDataStore();

  useEffect(() => {
    if (userData) {
      setUserData(userData);
      const nextPage = getRedirectPath(userData);
      if (pathname !== nextPage) {
        router.replace(nextPage);
      }
    } else {
      logout();
    }
  }, [logout, pathname, router, setUserData, userData]);

  return <>{children}</>;
}
