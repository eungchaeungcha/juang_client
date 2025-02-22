import { GetUsersMeResponseBody } from "@/types/api";
import { api } from "./api";

export const usersApi = {
  getUser: () => api.get<GetUsersMeResponseBody>("users/me"),
};
