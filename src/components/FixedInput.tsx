import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

interface FixedInputProps extends Omit<ComponentPropsWithRef<"input">, "size"> {
  prefix?: string;
  suffix?: string;
  size?: "lg" | "sm";
}

export default function FixedInput({
  prefix,
  suffix,
  className,
  size = "lg",
  ...props
}: FixedInputProps) {
  const fixedInputStyles = {
    lg: {
      text: "text-2xl font-bold",
      input:
        "outline-none rounded-none text-2xl font-bold placeholder:text-gray-primary py-2 text-center",
    },
    sm: {
      text: "",
      input: "outline-none rounded-none placeholder:text-gray-primary py-1",
    },
  };

  return (
    <div className="w-full flex-row-center gap-1 flex-wrap border-b-2 border-gray-light has-[:focus]:border-orange-primary">
      {Boolean(prefix) && <div>{prefix}</div>}
      <input
        className={twMerge(fixedInputStyles[size].input, className)}
        {...props}
      />
      {Boolean(suffix) && (
        <div className={fixedInputStyles[size].text}>{suffix}</div>
      )}
    </div>
  );
}
