import { CSSProperties } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type Direction = "up" | "left" | "down" | "right";

export interface TriangleProps {
  className?: string;
  dir: Direction;
  width: number;
  height: number;
}

export default function Triangle({
  className,
  dir,
  width,
  height,
}: TriangleProps) {
  const triangleStyles: Record<Direction, CSSProperties> = {
    up: {
      borderLeftWidth: width,
      borderRightWidth: width,
      borderBottomWidth: height,
    },
    down: {
      borderLeftWidth: width,
      borderRightWidth: width,
      borderTopWidth: height,
    },
    left: {
      borderTopWidth: width,
      borderBottomWidth: width,
      borderRightWidth: height,
    },
    right: {
      borderTopWidth: width,
      borderBottomWidth: width,
      borderLeftWidth: height,
    },
  };

  return (
    <div
      style={triangleStyles[dir]}
      className={twMerge(
        className,
        clsx({
          "border-l-transparent border-r-transparent":
            dir === "up" || dir === "down",
          "border-t-transparent border-b-transparent":
            dir === "left" || dir === "right",
        }),
      )}
    />
  );
}
