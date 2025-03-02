import {
  GetUserResponseBody,
  PatchUserCharacterRequestParams,
  PatchUserFamiliesRequestBody,
  PatchUserNickNameRequestBody,
  PatchUserResponseBody,
} from "@/types/api";
import { apiClient, apiServer } from "./api";

export const usersApi = {
  getUser: () => apiServer.get<GetUserResponseBody>("users/me"),

  getUserClient: () => apiClient.get<GetUserResponseBody>("users/me"),

  patchUserCharacter: ({ characterId }: PatchUserCharacterRequestParams) =>
    apiClient.patch<PatchUserCharacterRequestParams, PatchUserResponseBody>(
      `users/characters/${characterId}`,
    ),

  patchUserNickname: (data: PatchUserNickNameRequestBody) =>
    apiClient.patch<PatchUserNickNameRequestBody, PatchUserResponseBody>(
      "users/nick-name",
      data,
    ),

  patchUserFamily: (data: PatchUserFamiliesRequestBody) =>
    apiClient.patch<PatchUserFamiliesRequestBody, PatchUserResponseBody>(
      "users/families",
      data,
    ),
};
