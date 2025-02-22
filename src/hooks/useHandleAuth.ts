import { useRouter } from "next/navigation";
import { routePathes } from "@/constants/route";
import { GetUsersMeResponseBody } from "@/types/api";
import { useUserDataStore } from "@/store/userDataStore";

export const useHandleAuth = () => {
  const router = useRouter();
  const { setUserData, clearUserData } = useUserDataStore();

  const handleLogin = (userData: GetUsersMeResponseBody) => {
    setUserData(userData);
    router.push(routePathes.root);
  };

  const handleLogout = () => {
    clearUserData();
    router.push(routePathes.root);
  };

  return { handleLogin, handleLogout };
};
