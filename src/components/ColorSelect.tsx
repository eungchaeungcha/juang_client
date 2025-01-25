import { CHARACTOR_COLORS } from "@/constants/charactor";
import clsx from "clsx";

interface ColorSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function ColorSelect({ value, onChange }: ColorSelectProps) {
  return (
    <div className="grid grid-cols-5 gap-2 px-4">
      {Object.entries(CHARACTOR_COLORS).map(([name, code]) => (
        <div
          key={name}
          className={clsx(
            "relative w-full aspect-square rounded-3xl cursor-pointer styleset--click",
            code === value && "border-[6px] border-black-soft border-opacity-10"
          )}
          style={{ background: code }}
          onClick={() => {
            onChange?.(code);
          }}
        />
      ))}
    </div>
  );
}
