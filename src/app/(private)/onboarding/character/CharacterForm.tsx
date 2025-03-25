"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { CharacterSelect } from "@/components/form";
import { CharacterFormType } from "@/schemas/CharacterSchema";

interface CharacterFormProps {
  onNext: VoidFunction;
}

export default function CharacterForm({ onNext }: CharacterFormProps) {
  const { setValue } = useFormContext<CharacterFormType>();
  const { name } = useWatch<CharacterFormType>();

  return (
    <>
      <div className="w-full">
        <CharacterSelect
          value={name}
          onChange={(value) => {
            setValue("name", value);
          }}
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <button
          onClick={onNext}
          disabled={!name}
          className="styled-btn--orange w-full">
          다음
        </button>
      </div>
    </>
  );
}
