import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, usersApi } from "@/services";
import { customToast } from "@/components";
import queryKeys from "@/constants/queryKeys";
import { useHandleAuth } from "./useHandleAuth";
import { useUserDataStore } from "@/store/userDataStore";

export const useUserData = () => {
  const { setUserData, userData } = useUserDataStore();

  const { data: fetchedUserData, isError } = useQuery({
    queryFn: usersApi.getUserClient,
    queryKey: queryKeys.users.me(userData ? userData.id : 0),
    retry: false,
  });

  const { handleLogout } = useHandleAuth();
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
  });

  useEffect(() => {
    if (fetchedUserData) {
      setUserData(fetchedUserData);
    } else if (isError) {
      customToast.error("사용자 정보를 불러올 수 없습니다.");
      logout();
    }
  }, [fetchedUserData, isError, logout, setUserData, userData]);

  return { userData: userData || fetchedUserData, setUserData };
};
