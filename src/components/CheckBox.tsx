import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
  text: string;
  checked: boolean;
  onChange: VoidFunction;
}

export default function CheckBox({ text, checked, onChange }: CheckBoxProps) {
  const styles = {
    box: "flex gap-1 items-center relative",
    input:
      "appearance-none border-2 border-green-primary w-4 h-4 bg-white rounded-sm checked:bg-green-primary mb-0.5 cursor-pointer",
    icon: "absolute left-[0.15rem] top-1 pointer-events-none",
  };

  return (
    <div className={styles.box}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <label>{text}</label>
      {checked && (
        <FaCheck
          color="white"
          className={styles.icon}
          size={10}
        />
      )}
    </div>
  );
}
