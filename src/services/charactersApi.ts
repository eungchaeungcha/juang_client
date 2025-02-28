import {
  GetCharacterIdRequestParams,
  GetCharacterRequestParams,
} from "@/types/api";
import { apiClient } from "./api";

export const charactersApi = {
  getCharacterId: ({ name, color }: GetCharacterIdRequestParams) =>
    apiClient.get<string>(
      `characters?name=${name}&color=${color.replace("#", "%23")}`,
    ),

  getCharacter: ({ characterId }: GetCharacterRequestParams) => {
    apiClient.get(`characters/${characterId}`);
  },
};
