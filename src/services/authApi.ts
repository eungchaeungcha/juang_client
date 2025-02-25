import {
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  GetUsersMeResponseBody,
  PostLoginRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { apiClient } from "@/libs/api";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    apiClient.post<PostRegisterRequestBody, void>("auth/register", data),

  postLogin: (data: PostLoginRequestBody) =>
    apiClient.post<PostLoginRequestBody, GetUsersMeResponseBody>(
      "auth/login",
      data,
    ),

  postLogout: () => apiClient.post("auth/logout"),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    apiClient.get<GetUsernameDuplicateResponseBody>(
      `auth/${username}/duplicate`,
    ),
};
