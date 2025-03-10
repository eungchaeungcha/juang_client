"use client";

import { useWatch } from "react-hook-form";
import { FaDice } from "react-icons/fa";
import { usePatchUserCharacter } from "@/services/user";
import { CharacterSelect, ColorSelect } from "@/components/form";
import { Accordion, CustomCharacter, Spinner } from "@/components/ui";
import { getRandomNumber } from "@/utils/getRandomNumber";
import {
  CharacterColor,
  CharacterFormType,
  CharacterName,
} from "@/schemas/CharacterSchema";
import { useCharacterEditMode } from "./useCharacterEditMode";

export default function Page() {
  const { formMethods, isPending, handleSubmit } = usePatchUserCharacter();

  const {
    isColorEditing,
    isNameEditing,
    handleClickEditColor,
    handleClickEditName,
  } = useCharacterEditMode();

  const { name, color } = useWatch<CharacterFormType>({
    control: formMethods.control,
  });

  const randomizeCharacter = () => {
    formMethods.setValue("name", CharacterName.options[getRandomNumber(0, 8)]);
    formMethods.setValue(
      "color",
      CharacterColor.options[getRandomNumber(0, 8)],
    );
  };

  return (
    <>
      <div className="m-8 relative">
        <CustomCharacter
          className="aspect-square p-5 w-48 h-48 rounded-full border-4 border-gray-light"
          name={name}
          color={color}
        />
        <button
          className="text-2xl text-white bg-orange-primary p-2 rounded-full absolute right-0 bottom-4 styled-click shadow-md"
          onClick={randomizeCharacter}>
          <FaDice />
        </button>
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
          onClick={handleSubmit}
          disabled={isPending}>
          {isPending ? <Spinner /> : "완료"}
        </button>
      </div>
    </>
  );
}
