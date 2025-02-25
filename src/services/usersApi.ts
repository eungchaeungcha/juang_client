import { GetUsersMeResponseBody } from "@/types/api";
import { apiServer } from "@/libs/api";

export const usersApi = {
  getUser: () => apiServer.get<GetUsersMeResponseBody>("users/me"),
};
