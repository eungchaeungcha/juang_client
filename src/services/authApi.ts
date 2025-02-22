import {
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  PostLoginRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { api } from "./api";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    api.post<PostRegisterRequestBody, void>("auth/register", data),

  postLogin: (data: PostLoginRequestBody) =>
    api.post<PostLoginRequestBody, void>("auth/login", data),

  postLogout: () => api.post("auth/logout"),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    api.get<GetUsernameDuplicateResponseBody>(`auth/${username}/duplicate`),
};
