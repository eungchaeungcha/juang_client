"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import { useCharacterData } from "@/services/character";
import { useUserData } from "@/services/user";

interface UserCharacterImageProps
  extends Omit<ImageProps, "src" | "alt" | "priority"> {
  fallback?: React.ReactNode;
}

export default function UserCharacterImage({
  fallback,
  ...props
}: UserCharacterImageProps) {
  const { userData } = useUserData();
  const { data: userCharacter } = useCharacterData({
    params: { characterId: userData?.characterId ?? 0 },
  });

  if (userCharacter) {
    return (
      <Image
        src={userCharacter.link}
        alt="사용자 캐릭터 이미지"
        priority
        {...props}
      />
    );
  }

  return fallback ?? null;
}
