"use client";

import { FormProvider } from "react-hook-form";
import CharacterForm from "./CharacterForm";
import CharacterPreview from "./CharacterPreview";
import ColorForm from "./ColorForm";
import { useCharacterSearchParams } from "./useCharacterSearchParams";
import { usePatchCharacter } from "./usePatchCharacter";

export default function Page() {
  const { formMethods, handleSubmit, isPending } = usePatchCharacter();
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
