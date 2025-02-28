"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { charactersApi, usersApi } from "@/services";
import { CharacterFormType } from "@/schemas/CharacterSchema";
import queryKeys from "@/constants/queryKeys";
import CharacterForm from "./CharacterForm";
import CharacterPreview from "./CharacterPreview";
import ColorForm from "./ColorForm";

export default function Page() {
  const formMethods = useForm<CharacterFormType>();

  const [currentForm, setCurrentForm] =
    useState<keyof CharacterFormType>("name");

  const { name, color } = formMethods.watch();

  const router = useRouter();

  const { data: characterId } = useQuery({
    queryFn: () => charactersApi.getCharacterByData({ name, color }),
    queryKey: queryKeys.characters.id({ name, color }),
    select: ({ id }) => id,
    enabled: Boolean(name && color),
  });

  const { mutate: patchCharacter, isPending } = useMutation({
    mutationFn: usersApi.patchUserCharacter,
    onSuccess: router.refresh,
  });

  const handleSubmit = () => {
    if (characterId) {
      patchCharacter({ characterId });
    }
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
          isLoading={isPending}
        />
      )}
    </FormProvider>
  );
}
