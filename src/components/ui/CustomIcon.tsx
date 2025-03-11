import { ComponentPropsWithRef } from "react";
import { ICON_SPRITE, ICON_URL } from "@/constants/sprite";

interface CustomIconProps extends ComponentPropsWithRef<"div"> {
  icon: keyof typeof ICON_SPRITE;
}

export default function CustomIcon({ icon, ...props }: CustomIconProps) {
  return (
    <div {...props}>
      <svg className="w-full h-full">
        <use xlinkHref={`${ICON_URL}/#${ICON_SPRITE[icon]}`}></use>
      </svg>
    </div>
  );
}
