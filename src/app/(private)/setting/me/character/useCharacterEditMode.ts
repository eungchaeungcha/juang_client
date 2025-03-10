import { useState } from "react";
import { CharacterFormType } from "@/schemas/CharacterSchema";

export const useCharacterEditMode = () => {
  const [editMode, setEditMode] = useState<keyof CharacterFormType | null>();

  const handleClickEditName = () => {
    setEditMode((mode) => (mode === "name" ? null : "name"));
  };

  const handleClickEditColor = () => {
    setEditMode((mode) => (mode === "color" ? null : "color"));
  };

  return {
    isNameEditing: editMode === "name",
    isColorEditing: editMode === "color",
    handleClickEditColor,
    handleClickEditName,
  };
};
