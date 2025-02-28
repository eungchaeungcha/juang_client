import { cookies } from "next/headers";
import { BeforeRequestFn } from "@/libs/Api";
import { apiClient, apiServer } from "@/services/api";

const AUTH_TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

const setAuthTokenInHeader: BeforeRequestFn = async (configs) => {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN_KEY)?.value;
  const requestHeaders = new Headers(configs.headers);

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  } else {
    requestHeaders.delete("Authorization");
  }
  return { ...configs, headers: requestHeaders };
};

apiClient.beforeRequest(setAuthTokenInHeader);
apiServer.beforeRequest(setAuthTokenInHeader);

export default function ApiAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
