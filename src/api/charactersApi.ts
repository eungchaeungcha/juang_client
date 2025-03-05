import {
  GetCharacterByDataRequestParams,
  GetCharacterByIdRequestParams,
  GetCharacterResponseBody,
} from "@/types/api";
import { apiClient, apiServer } from "./instance";

export const charactersApi = {
  getCharacterByData: ({ name, color }: GetCharacterByDataRequestParams) =>
    apiClient.get<GetCharacterResponseBody>(
      `characters?name=${name}&color=${encodeURIComponent(color)}`,
    ),

  getCharacterById: ({ characterId }: GetCharacterByIdRequestParams) =>
    apiClient.get<GetCharacterResponseBody>(`characters/${characterId}`),

  getCharacterByIdServer: ({ characterId }: GetCharacterByIdRequestParams) =>
    apiServer.get<GetCharacterResponseBody>(`characters/${characterId}`),
};
