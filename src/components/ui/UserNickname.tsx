"use client";

import { ComponentProps } from "react";
import { useUserData } from "@/services/user";

export default function UserNickname(props: ComponentProps<"div">) {
  const { userData } = useUserData();

  return <div {...props}>{userData?.nickName}</div>;
}
