"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { charactersApi } from "@/services/charactersApi";
import queryKeys from "@/constants/queryKeys";
import CharacterForm from "./CharacterForm";
import CharacterPreview from "./CharacterPreview";
import ColorForm from "./ColorForm";
import { CharacterFormType } from "@/schemas/CharacterSchema";

export default function Page() {
  const formMethods = useForm<CharacterFormType>();
  const [currentForm, setCurrentForm] =
    useState<keyof CharacterFormType>("name");

  const handleSubmit = () => {
    console.log(formMethods.getValues());
  };

  const { data: characterId } = useQuery({
    queryFn: () => charactersApi.getCharacterId(formMethods.watch()),
    queryKey: queryKeys.characters.id(formMethods.watch()),
    enabled: Boolean(formMethods.watch("color") && formMethods.watch("name")),
  });

  useEffect(() => {
    console.log(characterId);
  }, [characterId]);

  return (
    <FormProvider {...formMethods}>
      <CharacterPreview />
      {currentForm === "name" && (
        <CharacterForm onNext={() => setCurrentForm("color")} />
      )}
      {currentForm === "color" && (
        <ColorForm
          onPrev={() => setCurrentForm("name")}
          onNext={handleSubmit}
        />
      )}
    </FormProvider>
  );
}
