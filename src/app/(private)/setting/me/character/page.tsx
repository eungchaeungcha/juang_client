"use client";

import { FormProvider } from "react-hook-form";
import { usePatchUserCharacter } from "@/services/user";
import { Spinner } from "@/components/ui";
import CharacterEditForm from "./CharacterEditForm";
import CharacterPreview from "./CharacterPreview";

export default function Page() {
  const { formMethods, isPending, handleSubmit } = usePatchUserCharacter();

  return (
    <FormProvider {...formMethods}>
      <CharacterPreview />
      <CharacterEditForm />
      <div className="w-full p-8">
        <button
          className="styled-btn--orange w-full"
          onClick={handleSubmit}
          disabled={isPending}>
          {isPending ? <Spinner /> : "완료"}
        </button>
      </div>
    </FormProvider>
  );
}
