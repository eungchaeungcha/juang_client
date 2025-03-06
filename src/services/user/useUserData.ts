import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi, usersApi } from "@/api";
import { useHandleAuth } from "@/services/auth";
import { customToast } from "@/components/ui";
import queryKeys from "@/constants/queryKeys";

export const useUserData = () => {
  const queryClient = useQueryClient();

  const { data, isError } = useQuery({
    queryFn: usersApi.getUserClient,
    queryKey: queryKeys.users.me(0),
    retry: false,
  });

  const { handleLogout } = useHandleAuth();
  const { mutate: logout } = useMutation({
    mutationFn: authApi.postLogout,
    onSuccess: handleLogout,
  });

  const reloadUserData = () =>
    queryClient.invalidateQueries({
      queryKey: queryKeys.users.me(0),
    });

  useEffect(() => {
    if (isError) {
      customToast.error("사용자 정보를 불러올 수 없습니다.");
      logout();
    }
  }, [isError, logout]);

  return { userData: data, reloadUserData };
};
