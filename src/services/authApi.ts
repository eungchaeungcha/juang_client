import {
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  PostAuthenticateRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { api } from "./api";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    api.post<PostRegisterRequestBody, void>("auth/register", data),

  postAuthentiate: (data: PostAuthenticateRequestBody) =>
    api.post<PostAuthenticateRequestBody, void>("auth/authenticate", data),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    api.get<GetUsernameDuplicateResponseBody>(`auth/${username}/duplicate`),
};
