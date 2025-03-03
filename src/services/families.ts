import { PostFamilyRequestBody, PostFamilyResponseBody } from "@/types/api";
import { apiClient } from "./api";

export const familiesApi = {
  postFamily: (data: PostFamilyRequestBody) =>
    apiClient.post<PostFamilyRequestBody, PostFamilyResponseBody>(
      "families",
      data,
    ),
};
