import { twMerge } from "tailwind-merge";
import Charactor1 from "../../public/assets/charactor1.svg";
import Charactor2 from "../../public/assets/charactor2.svg";
import Charactor3 from "../../public/assets/charactor3.svg";
import Charactor4 from "../../public/assets/charactor4.svg";
import Charactor5 from "../../public/assets/charactor5.svg";
import Charactor6 from "../../public/assets/charactor6.svg";
import Charactor7 from "../../public/assets/charactor7.svg";
import Charactor8 from "../../public/assets/charactor8.svg";
import Charactor9 from "../../public/assets/charactor9.svg";
import { ComponentPropsWithRef } from "react";

interface CustomCharactorProps extends ComponentPropsWithRef<"div"> {
  type: number;
  scale?: number;
  className?: string;
}

const charactorList = [
  {
    Charactor: Charactor1,
    width: 233,
    height: 194,
  },
  {
    Charactor: Charactor2,
    width: 216,
    height: 162,
  },
  {
    Charactor: Charactor3,
    width: 201,
    height: 191,
  },
  {
    Charactor: Charactor4,
    width: 201,
    height: 180,
  },
  {
    Charactor: Charactor5,
    width: 193,
    height: 206,
  },
  {
    Charactor: Charactor6,
    width: 177,
    height: 221,
  },
  {
    Charactor: Charactor7,
    width: 207,
    height: 183,
  },
  {
    Charactor: Charactor8,
    width: 206,
    height: 162,
  },
  {
    Charactor: Charactor9,
    width: 265,
    height: 198,
  },
];

export default function CustomCharactor({
  type,
  scale = 30,
  className,
  ...props
}: CustomCharactorProps) {
  const { Charactor, width, height } = charactorList[type];

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
          className="absolute origin-top-left"
          style={{ scale: `${scale}%` }}
        />
      </div>
    </div>
  );
}
