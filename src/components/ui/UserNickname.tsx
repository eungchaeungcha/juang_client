"use client";

import { ComponentProps } from "react";
import { useUserData } from "@/services/user";

interface UserNicknameProps extends ComponentProps<"div"> {
  fallbackLength?: number;
}

export default function UserNickname({
  fallbackLength = 0,
  ...props
}: UserNicknameProps) {
  const { userData } = useUserData();
  const { nickName } = userData ?? {};

  return <div {...props}>{nickName ?? "\u00A0 ".repeat(fallbackLength)}</div>;
}
