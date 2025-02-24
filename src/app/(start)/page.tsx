"use client";

import { useCallback, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, usersApi } from "@/services";
import { useClientRedirect } from "@/hooks/useClientRedirect";
import { useHandleAuth } from "@/hooks/useHandleAuth";
import queryKeys from "@/constants/queryKeys";
import { routePathes } from "@/constants/route";
import { useUserDataStore } from "@/store/userDataStore";

export default function Page() {
  const { handleLogout } = useHandleAuth();
  const { userData, setUserData } = useUserDataStore();

  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
  });

  const { data: fetchedUserData, isError } = useQuery({
    queryFn: usersApi.getUser,
    queryKey: queryKeys.users.me(userData?.id ?? 0),
  });

  const redirectPage = useCallback(() => {
    if (!fetchedUserData) return null;

    const { nickname, characterId, familyId } = fetchedUserData;
    if (nickname && characterId && familyId) {
      return routePathes.private.main;
    }
    return routePathes.private.onboarding;
  }, [fetchedUserData]);

  useEffect(() => {
    if (fetchedUserData) {
      setUserData(fetchedUserData);
    }
    if (isError) {
      logout();
    }
  }, [fetchedUserData, isError, logout, setUserData]);

  const { ClientRedirect } = useClientRedirect(redirectPage);

  return <ClientRedirect />;
}
