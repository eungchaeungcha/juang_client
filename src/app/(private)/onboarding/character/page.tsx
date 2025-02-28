"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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
