import { ComponentPropsWithRef } from "react";
import clsx from "clsx";
import { CHARACTER_URL } from "@/constants/character";
import {
  CharacterColorEnum,
  CharacterNameEnum,
} from "@/schemas/CharacterSchema";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  name?: CharacterNameEnum;
  className?: string;
  color?: CharacterColorEnum;
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
