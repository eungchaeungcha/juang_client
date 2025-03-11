import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/api";
import { useCharacterData } from "@/services/character";
import { useUserData } from "@/services/user";
import {
  CharacterColorType,
  CharacterFormType,
  CharacterNameType,
  CharacterSchema,
} from "@/schemas/CharacterSchema";

interface PatchUserCharacterOption {
  onSuccess?: VoidFunction;
  onSuccessRoute?: string;
}

export const usePatchUserCharacter = ({
  onSuccess,
  onSuccessRoute,
}: PatchUserCharacterOption = {}) => {
  const router = useRouter();
  const handleSuccessPatch = () => {
    onSuccess?.();
    if (onSuccessRoute) {
      router.push(onSuccessRoute);
    }
  };

  // 기존 유저 캐릭터 데이터
  const { userData, reloadUserData } = useUserData();
  const characterId = userData?.characterId ?? 0;
  const { data: userCharacter } = useCharacterData({
    params: { characterId },
  });

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
  const { data: newCharacterId } = useCharacterData({
    params: { name, color },
    select: (data) => data.id,
  });

  // 유저 데이터 mutate 함수
  const { mutate: patchCharacter, isPending } = useMutation({
    mutationFn: usersApi.patchUserCharacter,
    onSuccess: async () => {
      await reloadUserData();
      handleSuccessPatch();
    },
  });

  // 폼 제출 함수
  const handleSubmit = () => {
    if (name === userCharacter?.name && color === userCharacter?.color) {
      handleSuccessPatch();
      return;
    }
    if (newCharacterId) {
      patchCharacter({ characterId: newCharacterId });
    }
  };

  return { formMethods, patchCharacter, isPending, handleSubmit };
};
