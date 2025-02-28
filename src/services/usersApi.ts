import {
  GetUserResponseBody,
  PatchUserCharacterRequestParams,
  PatchUserFamiliesRequestBody,
  PatchUserNicknameRequestBody,
} from "@/types/api";
import { apiClient, apiServer } from "./api";

export const usersApi = {
  getUser: () => apiServer.get<GetUserResponseBody>("users/me"),

  getUserClient: () => apiClient.get<GetUserResponseBody>("users/me"),

  patchUserCharacter: ({ characterId }: PatchUserCharacterRequestParams) =>
    apiClient.patch(`users/characters/${characterId}`),

  patchUserNickname: (data: PatchUserNicknameRequestBody) =>
    apiClient.patch("users/nick-name", data),

  patchUserFamily: (data: PatchUserFamiliesRequestBody) =>
    apiClient.patch("users/families", data),
};
