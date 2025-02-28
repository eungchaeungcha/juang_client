import {
  GetCharacterIdRequestParams,
  GetCharacterResourceRequestParams,
} from "@/types/api";
import { apiClient } from "./api";

export const charactersApi = {
  getCharacterId: ({ name, color }: GetCharacterIdRequestParams) =>
    apiClient.get<string>(
      `characters?name=${name}&color=${encodeURIComponent(color)}`,
    ),

  getCharacterResource: ({
    characterId,
  }: GetCharacterResourceRequestParams) => {
    apiClient.get(`characters/${characterId}`);
  },
};
