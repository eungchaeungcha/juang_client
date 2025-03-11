import {
  GetUserResponseBody,
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  PostLoginRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { apiClient } from "./instance";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    apiClient.post<PostRegisterRequestBody, void>("auth/register", data),

  postLogin: (data: PostLoginRequestBody) =>
    apiClient.post<PostLoginRequestBody, GetUserResponseBody>(
      "auth/login",
      data,
    ),

  postLogout: () => apiClient.post("auth/logout"),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    apiClient.get<GetUsernameDuplicateResponseBody>(
      `auth/${username}/duplicate`,
    ),
};
