"use client";

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

interface LinkButtonProps extends ComponentProps<"button"> {
  onClick?: VoidFunction | (() => Promise<void>);
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({
  onClick,
  href,
  children,
  ...props
}: LinkButtonProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await onClick?.();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      {...props}>
      {children}
    </button>
  );
}
