import { ComponentPropsWithRef } from "react";
import AutoWidthInput from "./AutoWidthInput";

interface AutoFixedInputProps extends ComponentPropsWithRef<"input"> {
  suffix?: string;
  prefix?: string;
}

export default function AutoFixedInput({
  suffix,
  prefix,
  ...props
}: AutoFixedInputProps) {
  return (
    <div className="flex-row-center tracking-wider p-1 text-2xl font-bold border-b-2 border-gray-light has-[:focus]:border-orange-primary">
      {prefix && <div>{prefix}</div>}
      <AutoWidthInput {...props} />
      {suffix && <div>{suffix}</div>}
    </div>
  );
}
