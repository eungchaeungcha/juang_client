import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { charactersApi } from "@/api";
import queryKeys from "@/constants/queryKeys";
import {
  GetCharacterByIdRequestParams,
  GetCharacterByValuesRequestParams,
  GetCharacterResponseBody,
} from "@/types/api";

interface UseCharacterDataOptions<T>
  extends Omit<
    UseQueryOptions<GetCharacterResponseBody, Error, T>,
    "queryKey" | "queryFn"
  > {
  params: GetCharacterByValuesRequestParams | GetCharacterByIdRequestParams;
  select?: (data: GetCharacterResponseBody) => T;
}

export const useCharacterData = <T = GetCharacterResponseBody>({
  params,
  select,
  ...options
}: UseCharacterDataOptions<T>) => {
  const isById = "characterId" in params;
  const queryKey = isById
    ? queryKeys.characters.byId({ characterId: params.characterId })
    : queryKeys.characters.byValues({ name: params.name, color: params.color });

  const queryFn = isById
    ? () => charactersApi.getCharacterById({ characterId: params.characterId })
    : () =>
        charactersApi.getCharacterByValues({
          name: params.name,
          color: params.color,
        });

  const enabled = isById
    ? Boolean(params.characterId)
    : Boolean(params.color && params.name);

  return useQuery({
    queryKey,
    queryFn,
    enabled,
    select,
    ...options,
  });
};
