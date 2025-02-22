import {
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  GetUsersMeResponseBody,
  PostLoginRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { api } from "./api";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    api.post<PostRegisterRequestBody, void>("auth/register", data),

  postLogin: (data: PostLoginRequestBody) =>
    api.post<PostLoginRequestBody, GetUsersMeResponseBody>("auth/login", data),

  postLogout: () => api.post("auth/logout"),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    api.get<GetUsernameDuplicateResponseBody>(`auth/${username}/duplicate`),
};
