import { useFormContext, useWatch } from "react-hook-form";
import { ColorSelect } from "@/components";
import { CharacterFormType } from "@/schemas/CharacterSchema";

interface ColorFormProps {
  onPrev: VoidFunction;
  onNext: VoidFunction;
}

export default function ColorForm({ onPrev, onNext }: ColorFormProps) {
  const { setValue } = useFormContext<CharacterFormType>();
  const { color } = useWatch<CharacterFormType>();

  return (
    <>
      <ColorSelect
        value={color}
        onChange={(value) => {
          setValue("color", value);
        }}
      />
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <button
          onClick={onPrev}
          className="styled-btn--orange w-full">
          이전
        </button>
        <button
          className="styled-btn--orange w-full"
          onClick={onNext}
          disabled={!color}>
          다음
        </button>
      </div>
    </>
  );
}
