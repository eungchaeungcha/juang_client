import { GetUsersMeResponseBody } from "@/types/api";
import { apiServer } from "./api";

export const usersApi = {
  getUser: () => apiServer.get<GetUsersMeResponseBody>("users/me"),
};
