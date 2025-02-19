import { PostAuthentiateRequest, PostRegisterRequest } from "@/types/request";
import { api } from "./api";

export const authApi = {
  postRegister: (data: PostRegisterRequest) =>
    api.post<PostRegisterRequest, void>("auth/register", data),

  postAuthentiate: (data: PostAuthentiateRequest) =>
    api.post<PostAuthentiateRequest, void>("auth/authentiate", data),
};
