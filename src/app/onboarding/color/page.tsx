"use client";

import { ColorSelect } from "@/components";
import Link from "next/link";
import CharacterPreview from "../components/CharacterPreview";
import { useFormContext, useWatch } from "react-hook-form";
import { CharacterFormType } from "@/types/form";
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
      <ColorSelect
        value={characterValues.color}
        onChange={(value) => {
          setValue("color", value);
        }}
      />
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href="character"
          className="styled-btn--orange w-full">
          이전
        </Link>
        <LinkButton
          href="nickname"
          className="styled-btn--orange w-full"
          onClick={() => {
            console.log(characterValues);
          }}
          disabled={!characterValues.color}>
          다음
        </LinkButton>
      </div>
    </>
  );
}
