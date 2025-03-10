"use client";

import { usePatchUserNickname } from "@/services/user";
import { FixedInput } from "@/components/form";
import { ShowError, Spinner, UserCharacterImage } from "@/components/ui";

export default function Page() {
  const { register, handleSubmit, isValid, isPending, errors } =
    usePatchUserNickname();

  return (
    <>
      <div className="h-full w-full flex-col-center gap-8 p-8">
        <div className="relative w-48 h-48 rounded-full border-4 border-gray-light">
          <UserCharacterImage
            fill
            className="object-contain scale-[80%]"
          />
        </div>
        <div className="px-8 h-20">
          <FixedInput
            suffix="감"
            autoFocus
            {...register("nickName")}
          />
          <ShowError
            errors={errors}
            name="nickName"
            className="text-xs text-orange-primary pt-1 text-center"
          />
        </div>
      </div>

      <div className="w-full p-8">
        <button
          className="styled-btn--orange w-full"
          onClick={handleSubmit}
          disabled={!isValid || isPending}>
          {isPending ? <Spinner /> : "완료"}
        </button>
      </div>
    </>
  );
}
