"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useUserCharacter } from "@/hooks/useUserCharacter";

interface CharacterImageProps {
  className?: string;
}

export default function CharacterImage({ className }: CharacterImageProps) {
  const { userCharacter } = useUserCharacter();

  // TODO : 캐릭터 이미지 링크 완성되면 수정 필요
  if (userCharacter) {
    return (
      <div className={twMerge("relative p-2", className)}>
        <Image
          // src={userCharacter?.link}
          src={userCharacter?.link.replace("/gam1/", `/${userCharacter.name}/`)}
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
