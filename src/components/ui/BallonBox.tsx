import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Triangle, { Direction, TriangleProps } from "./Triangle";

interface BallonBoxProps {
  children: React.ReactNode;
  dir: Direction;
  className?: string;
  containerClassName?: string;
  triangle?: Omit<TriangleProps, "dir">;
}

export default function BallonBox({
  children,
  dir,
  className,
  containerClassName,
  triangle,
}: BallonBoxProps) {
  return (
    <div
      className={clsx(
        {
          "flex flex-col-center": dir === "down" || dir === "up",
          "flex flex-row-center": dir === "left" || dir === "right",
        },
        containerClassName,
      )}>
      {["right", "down"].includes(dir) ? (
        <>
          <div className={twMerge("bg-gray-light", className)}>{children}</div>
          <Triangle
            dir={dir}
            width={25}
            height={25}
            {...triangle}
            className={twMerge("border-gray-light", triangle?.className)}
          />
        </>
      ) : (
        <>
          <Triangle
            dir={dir}
            width={25}
            height={25}
            {...triangle}
            className={twMerge("border-gray-light", triangle?.className)}
          />
          <div className={twMerge("bg-gray-light", className)}>{children}</div>
        </>
      )}
    </div>
  );
}
