"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { charactersApi } from "@/services";
import { useUserData } from "@/hooks/useUserData";
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

  // TODO : 캐릭터 이미지 링크 완성되면 수정 필요
  if (character) {
    return (
      <div className={twMerge("relative p-2", className)}>
        <Image
          // src={character?.link}
          src={character?.link.replace("/gam1/", `/${character.name}/`)}
          alt="사용자 캐릭터 이미지"
          fill
          className="object-contain scale-[80%]"
        />
      </div>
    );
  }
  return <div className={className} />;
}
