import { apiServer } from "@/libs/api";
import { GetUsersMeResponseBody } from "@/types/api";

export const usersApi = {
  getUser: () => apiServer.get<GetUsersMeResponseBody>("users/me"),
};
