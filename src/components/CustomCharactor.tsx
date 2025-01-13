import { twMerge } from "tailwind-merge";
import { ComponentPropsWithRef } from "react";
import { CHARACTOR_COLORS, CHARACTOR_LIST } from "@/constants/charactor";
import clsx from "clsx";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  type: number;
  scale?: number;
  className?: string;
  color?: (typeof CHARACTOR_COLORS)[number];
}

export default function CustomCharactor({
  type,
  scale = 30,
  className,
  color = "gray",
  ...props
}: CustomCharactorProps) {
  const { Charactor, width, height } = CHARACTOR_LIST[type];

  return (
    <div
      className={twMerge("flex-col-center", className)}
      {...props}>
      <div
        className="relative"
        style={{
          width: `${Math.floor((width / 100) * scale)}px`,
          height: `${Math.floor((height / 100) * scale)}px`,
        }}>
        <Charactor
          className={clsx("absolute origin-top-left", {
            "fill-charactor-red": color === "red",
            "fill-charactor-orange": color === "orange",
            "fill-charactor-yellow": color === "yellow",
            "fill-charactor-green": color === "green",
            "fill-charactor-blue": color === "blue",
            "fill-charactor-navy": color === "navy",
            "fill-charactor-purple": color === "purple",
            "fill-charactor-pink": color === "pink",
            "fill-charactor-gray": color === "gray",
          })}
          style={{ scale: `${scale}%` }}
        />
      </div>
    </div>
  );
}
