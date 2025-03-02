import { ComponentPropsWithRef } from "react";
import clsx from "clsx";
import {
  CharacterColorType,
  CharacterNameType,
} from "@/schemas/CharacterSchema";
import { CHARACTER_URL } from "@/constants/character";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  name?: CharacterNameType;
  className?: string;
  color?: CharacterColorType;
}

export default function CustomCharacter({
  name,
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
          xlinkHref={`${CHARACTER_URL}/#${name}`}
          className={clsx(color === undefined && "fill-charactor-orange")}
          style={{
            fill: color,
          }}></use>
      </svg>
    </div>
  );
}
