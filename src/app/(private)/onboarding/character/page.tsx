"use client";

import { FormProvider } from "react-hook-form";
import { usePatchUserCharacter } from "@/services/user";
import CharacterForm from "./CharacterForm";
import CharacterPreview from "./CharacterPreview";
import ColorForm from "./ColorForm";
import { useCharacterSearchParams } from "./useCharacterSearchParams";

export default function Page() {
  const { formMethods, handleSubmit, isPending } = usePatchUserCharacter();
  const { target, setUrlNameParam, setUrlColorParam } =
    useCharacterSearchParams();

  return (
    <FormProvider {...formMethods}>
      <CharacterPreview />
      {target === "name" && <CharacterForm onNext={setUrlColorParam} />}
      {target === "color" && (
        <ColorForm
          onPrev={setUrlNameParam}
          onNext={handleSubmit}
          isLoading={isPending}
        />
      )}
    </FormProvider>
  );
}
