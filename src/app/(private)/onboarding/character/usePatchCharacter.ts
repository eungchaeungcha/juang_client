import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { charactersApi, usersApi } from "@/services";
import { useUserCharacter } from "@/hooks/useUserCharacter";
import { useUserData } from "@/hooks/useUserData";
import {
  CharacterColorType,
  CharacterFormType,
  CharacterNameType,
  CharacterSchema,
} from "@/schemas/CharacterSchema";
import queryKeys from "@/constants/queryKeys";
import { routePaths } from "@/constants/route";

export const usePatchCharacter = () => {
  const router = useRouter();

  // 기존 유저 캐릭터 데이터
  const { reloadUserData } = useUserData();
  const { userCharacter } = useUserCharacter();

  // 기존의 name, color 가 기본값인 캐릭터 폼
  const formMethods = useForm<CharacterFormType>({
    values: {
      name: userCharacter?.name as CharacterNameType,
      color: userCharacter?.color as CharacterColorType,
    },
    resolver: zodResolver(CharacterSchema),
  });
  const { name, color } = formMethods.watch();

  // 폼에서 선택한 새로운 캐릭터의 아이디값
  const { data: newCharacterId } = useQuery({
    queryFn: () => charactersApi.getCharacterByData({ name, color }),
    queryKey: queryKeys.characters.byData({ name, color }),
    select: ({ id }) => id,
    enabled: Boolean(name && color),
  });

  // 유저 데이터 mutate 함수
  const { mutate: patchCharacter, isPending } = useMutation({
    mutationFn: usersApi.patchUserCharacter,
    onSuccess: async () => {
      await reloadUserData();
      router.push(routePaths.private.onboardingNickname);
    },
  });

  // 폼 제출 함수
  const handleSubmit = () => {
    if (name === userCharacter?.name && color === userCharacter?.color) {
      return router.push(routePaths.private.onboardingNickname);
    }
    if (newCharacterId) {
      patchCharacter({ characterId: newCharacterId });
    }
  };

  return { formMethods, patchCharacter, isPending, handleSubmit };
};
