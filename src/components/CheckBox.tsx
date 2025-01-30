import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
  text: string;
  checked: boolean;
  onChange: VoidFunction;
}

export default function CheckBox({ text, checked, onChange }: CheckBoxProps) {
  return (
    <div className="flex gap-1 items-center">
      <div className="relative flex-col-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none border-2 border-green-primary w-4 h-4 bg-white rounded-sm checked:bg-green-primary cursor-pointer"
        />
        {checked && (
          <FaCheck
            color="white"
            className="absolute inset-0 m-auto pointer-events-none"
            size={10}
          />
        )}
      </div>
      <label>{text}</label>
    </div>
  );
}
