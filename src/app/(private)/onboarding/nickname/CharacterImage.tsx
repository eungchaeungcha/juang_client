"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { charactersApi } from "@/services";
import { CustomCharacter } from "@/components";
import { useUserData } from "@/hooks/useUserData";
import {
  CharacterColorType,
  CharacterNameType,
} from "@/schemas/CharacterSchema";
import queryKeys from "@/constants/queryKeys";

interface CharacterImageProps {
  className?: string;
}

export default function CharacterImage({ className }: CharacterImageProps) {
  const { userData } = useUserData();
  const characterId = userData?.characterId ?? 0;

  const { data: character } = useQuery({
    queryFn: () => charactersApi.getCharacterById({ characterId }),
    queryKey: queryKeys.characters.byId({ characterId }),
    enabled: Boolean(characterId),
  });

  const [hasImageError, setHasImageError] = useState(false);

  // TODO : 캐릭터 이미지 링크 완성되면 수정 필요
  if (character) {
    if (hasImageError) {
      return (
        <CustomCharacter
          className={className}
          name={character.name as CharacterNameType}
          color={character.color as CharacterColorType}
        />
      );
    }
    return (
      <div className={twMerge("relative", className)}>
        <Image
          src={character?.link}
          alt="사용자 캐릭터 이미지"
          onError={() => {
            setHasImageError(true);
          }}
          unoptimized
          fill
        />
      </div>
    );
  }
  return <div className={className} />;
}
