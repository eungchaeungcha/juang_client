"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useCharacterData } from "@/services/character";
import { useUserData } from "@/services/user";

interface CharacterImageProps {
  className?: string;
}

export default function CharacterImage({ className }: CharacterImageProps) {
  const { userData } = useUserData();
  const characterId = userData?.characterId ?? 0;
  const { data: userCharacter } = useCharacterData({
    params: { characterId },
  });

  if (userCharacter) {
    return (
      <div className={twMerge("relative p-2", className)}>
        <Image
          src={userCharacter?.link}
          alt="사용자 캐릭터 이미지"
          fill
          priority
          className="object-contain scale-[80%]"
        />
      </div>
    );
  }
  return <div className={className} />;
}
