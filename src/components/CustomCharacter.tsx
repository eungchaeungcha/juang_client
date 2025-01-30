import { ComponentPropsWithRef } from "react";
import { CHARACTER_URL } from "@/constants/character";
import clsx from "clsx";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  charId?: string;
  className?: string;
  color?: string;
}

export default function CustomCharacter({
  charId,
  className,
  color,
  ...props
}: CustomCharactorProps) {
  return (
    <div
      className={className}
      {...props}>
      <svg className="w-full h-full">
        <use
          xlinkHref={`${CHARACTER_URL}/#${charId}`}
          className={clsx(color === undefined && "fill-charactor-orange")}
          style={{
            fill: color,
          }}></use>
      </svg>
    </div>
  );
}
