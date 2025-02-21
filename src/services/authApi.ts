import {
  GetUsernameDuplicateRequestParams,
  GetUsernameDuplicateResponseBody,
  PostAuthentiateRequestBody,
  PostRegisterRequestBody,
} from "@/types/api";
import { api } from "./api";

export const authApi = {
  postRegister: (data: PostRegisterRequestBody) =>
    api.post<PostRegisterRequestBody, void>("auth/register", data),

  postAuthentiate: (data: PostAuthentiateRequestBody) =>
    api.post<PostAuthentiateRequestBody, void>("auth/authentiate", data),

  getUsernameDuplicate: ({ username }: GetUsernameDuplicateRequestParams) =>
    api.get<GetUsernameDuplicateResponseBody>(`auth/${username}/duplicate`),
};
