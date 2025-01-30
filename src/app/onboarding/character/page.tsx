"use client";

import { CharacterSelect } from "@/components";
import CharacterPreview from "../components/CharacterPreview";
import { CharacterFormType } from "@/types/form";
import { useFormContext, useWatch } from "react-hook-form";
import LinkButton from "@/components/LinkButton";

export default function Page() {
  const { setValue } = useFormContext<CharacterFormType>();
  const characterValues = useWatch<CharacterFormType>();

  return (
    <>
      <CharacterPreview
        {...characterValues}
        onRandomize={({ character, color }) => {
          setValue("character", character);
          setValue("color", color);
        }}
      />
      <div className="w-full">
        <CharacterSelect
          value={characterValues.character}
          onChange={(value) => {
            setValue("character", value);
          }}
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <LinkButton
          href="color"
          className="styled-btn--orange w-full"
          disabled={!characterValues.character}>
          다음
        </LinkButton>
      </div>
    </>
  );
}
