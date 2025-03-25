import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { CharacterSelect, ColorSelect } from "@/components/form";
import { Accordion } from "@/components/ui";
import { CharacterFormType } from "@/schemas/CharacterSchema";

export default function CharacterEditForm() {
  const { setValue, control } = useFormContext<CharacterFormType>();
  const { name, color } = useWatch({ control });

  const [editMode, setEditMode] = useState<keyof CharacterFormType | null>();
  const handleClickEditName = () => {
    setEditMode((mode) => (mode === "name" ? null : "name"));
  };
  const handleClickEditColor = () => {
    setEditMode((mode) => (mode === "color" ? null : "color"));
  };

  return (
    <div className="w-full grow">
      <Accordion
        className="w-full border-b-2 border-gray-light"
        buttonText="캐릭터 종류 선택하기"
        isOpen={editMode === "name"}
        onToggle={handleClickEditName}>
        <CharacterSelect
          value={name}
          onChange={(value) => setValue("name", value)}
        />
      </Accordion>
      <Accordion
        className="w-full"
        buttonText="색상 선택하기"
        isOpen={editMode === "color"}
        onToggle={handleClickEditColor}>
        <ColorSelect
          value={color}
          onChange={(value) => setValue("color", value)}
        />
      </Accordion>
    </div>
  );
}
