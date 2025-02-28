import Api, { ApiRequectConfigs } from "@/libs/Api";
import { getCookie } from "@/utils/getCookie";

const JUANG_API_URL = process.env.JUANG_API_URL ?? "";
const AUTH_TOKEN_KEY = process.env.AUTH_TOKEN_KEY ?? "";

const setAuthTokenHeader = async (configs: ApiRequectConfigs) => {
  const token = await getCookie(AUTH_TOKEN_KEY);
  const requestHeaders = new Headers(configs.headers);

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  } else {
    requestHeaders.delete("Authorization");
  }
  return { ...configs, headers: requestHeaders };
};

export const apiClient = Api.create("/api").beforeRequest(setAuthTokenHeader);
export const apiServer =
  Api.create(JUANG_API_URL).beforeRequest(setAuthTokenHeader);
