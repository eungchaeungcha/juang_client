import { ComponentPropsWithRef } from "react";
import { FaCheck } from "react-icons/fa";

interface CheckBoxProps extends ComponentPropsWithRef<"input"> {
  text: string;
}

export default function CheckBox({ text, ...props }: CheckBoxProps) {
  return (
    <div className="flex gap-1 items-center">
      <div className="relative flex-col-center">
        <input
          type="checkbox"
          className="appearance-none border-2 border-green-primary w-4 h-4 bg-white rounded-sm checked:bg-green-primary cursor-pointer"
          {...props}
        />
        <FaCheck
          color="white"
          className="absolute inset-0 m-auto pointer-events-none"
          size={10}
        />
      </div>
      <label>{text}</label>
    </div>
  );
}
