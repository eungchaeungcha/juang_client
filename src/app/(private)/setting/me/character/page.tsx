"use client";

import { useWatch } from "react-hook-form";
import { usePatchUserCharacter } from "@/services/user";
import { CharacterSelect, ColorSelect } from "@/components/form";
import { Accordion, CustomCharacter, Spinner } from "@/components/ui";
import { CharacterFormType } from "@/schemas/CharacterSchema";
import { useCharacterEditMode } from "./useCharacterEditMode";

export default function Page() {
  const { formMethods, patchCharacter, isPending, handleSubmit } =
    usePatchUserCharacter();

  const {
    isColorEditing,
    isNameEditing,
    handleClickEditColor,
    handleClickEditName,
  } = useCharacterEditMode();

  const { name, color } = useWatch<CharacterFormType>({
    control: formMethods.control,
  });

  return (
    <>
      <div className="p-8">
        <CustomCharacter
          className="aspect-square p-5 w-48 h-48 rounded-full border-4 border-gray-light"
          name={name}
          color={color}
        />
      </div>
      <div className="w-full grow">
        <Accordion
          className="w-full border-b-2 border-gray-light"
          buttonText="캐릭터 종류 선택하기"
          isOpen={isNameEditing}
          onToggle={handleClickEditName}>
          <CharacterSelect
            value={name}
            onChange={(value) => formMethods.setValue("name", value)}
          />
        </Accordion>
        <Accordion
          className="w-full"
          buttonText="색상 선택하기"
          isOpen={isColorEditing}
          onToggle={handleClickEditColor}>
          <ColorSelect
            value={color}
            onChange={(value) => formMethods.setValue("color", value)}
          />
        </Accordion>
      </div>
      <div className="w-full p-8">
        <button
          className="styled-btn--orange w-full"
          disabled={isPending}>
          {isPending ? <Spinner /> : "완료"}
        </button>
      </div>
    </>
  );
}
