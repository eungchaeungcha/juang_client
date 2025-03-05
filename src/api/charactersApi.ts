import {
  GetCharacterByIdRequestParams,
  GetCharacterByValuesRequestParams,
  GetCharacterResponseBody,
} from "@/types/api";
import { apiClient, apiServer } from "./instance";

export const charactersApi = {
  getCharacterByValues: ({ name, color }: GetCharacterByValuesRequestParams) =>
    apiClient.get<GetCharacterResponseBody>(
      `characters?name=${name}&color=${encodeURIComponent(color)}`,
    ),

  getCharacterById: ({ characterId }: GetCharacterByIdRequestParams) =>
    apiClient.get<GetCharacterResponseBody>(`characters/${characterId}`),

  getCharacterByIdServer: ({ characterId }: GetCharacterByIdRequestParams) =>
    apiServer.get<GetCharacterResponseBody>(`characters/${characterId}`),
};
