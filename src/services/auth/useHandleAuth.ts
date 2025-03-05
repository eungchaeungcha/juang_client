import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/constants/queryKeys";
import { routePaths } from "@/constants/route";
import { GetUserResponseBody } from "@/types/api";

export const useHandleAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogin = (userData: GetUserResponseBody) => {
    queryClient.setQueryData(queryKeys.users.me(0), userData);
    router.push(routePaths.root);
  };

  const handleLogout = () => {
    router.push(routePaths.root);
  };

  return { handleLogin, handleLogout };
};
