"use client";

import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";
import { CHARACTOR_COLORS } from "@/constants/charactor";
import clsx from "clsx";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  type: number;
  className?: string;
  color?: (typeof CHARACTOR_COLORS)[number];
}

export default function CustomCharactor({
  type,
  className,
  color = CHARACTOR_COLORS[type],
  ...props
}: CustomCharactorProps) {
  const spriteLink = "/assets/charactor_sprite.svg";

  return (
    <div
      className={twMerge("flex-col-center", className)}
      {...props}>
      <svg className="w-full h-full">
        <use
          xlinkHref={`${spriteLink}/#charactor${type + 1}`}
          className={clsx({
            "fill-charactor-red": color === "red",
            "fill-charactor-orange": color === "orange",
            "fill-charactor-yellow": color === "yellow",
            "fill-charactor-green": color === "green",
            "fill-charactor-blue": color === "blue",
            "fill-charactor-navy": color === "navy",
            "fill-charactor-purple": color === "purple",
            "fill-charactor-pink": color === "pink",
            "fill-charactor-gray": color === "gray",
          })}></use>
      </svg>
    </div>
  );
}
