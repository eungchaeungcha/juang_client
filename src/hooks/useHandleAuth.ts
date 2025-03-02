import { useRouter } from "next/navigation";
import { routePaths } from "@/constants/route";
import { GetUserResponseBody } from "@/types/api";
import { useUserDataStore } from "@/store/userDataStore";

export const useHandleAuth = () => {
  const router = useRouter();
  const { setUserData, clearUserData } = useUserDataStore();

  const handleLogin = (userData: GetUserResponseBody) => {
    setUserData(userData);
    router.push(routePaths.root);
  };

  const handleLogout = () => {
    clearUserData();
    router.push(routePaths.root);
  };

  return { handleLogin, handleLogout };
};
