import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@/constants/queryKeys";
import { charactersApi } from "@/api";
import { useUserCharacterStore } from "@/store/userCharacterStore";
import { useUserDataStore } from "@/store/userDataStore";

export const useUserCharacter = () => {
  const { userData } = useUserDataStore();
  const characterId = userData?.characterId ?? 0;

  const { userCharacter, setUserCharacter, clearCharacter } =
    useUserCharacterStore();

  const { data: fetchedUserCharacter, isError } = useQuery({
    queryFn: () => charactersApi.getCharacterById({ characterId }),
    queryKey: queryKeys.characters.byId({ characterId }),
    enabled: Boolean(characterId),
  });

  useEffect(() => {
    if (fetchedUserCharacter) {
      setUserCharacter(fetchedUserCharacter);
    } else if (isError) {
      clearCharacter();
    }
  }, [clearCharacter, fetchedUserCharacter, isError, setUserCharacter]);

  return {
    userCharacter: userCharacter || fetchedUserCharacter,
    setUserCharacter,
  };
};
