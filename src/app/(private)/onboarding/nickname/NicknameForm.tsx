"use client";

import Link from "next/link";
import { usePatchUserNickname } from "@/services/user";
import { AutoFixedInput } from "@/components/form";
import { ShowError, Spinner } from "@/components/ui";
import { routePaths } from "@/constants/route";

export default function NicknameForm() {
  const { register, handleSubmit, isValid, isPending, errors } =
    usePatchUserNickname({
      onSuccessRoute: routePaths.private.onboardingFamily,
    });

  return (
    <>
      <div className="px-8 h-20 flex-col-center">
        <AutoFixedInput
          {...register("nickName")}
          placeholder="둥글둥글 빤딱빤딱한"
          suffix="감"
        />
        <ShowError
          errors={errors}
          name="nickName"
          className="text-xs text-orange-primary pt-1 text-center"
        />
      </div>
      <div className="flex-row-center w-full gap-4 p-8 h-24 text-lg">
        <Link
          href={routePaths.withQueryParams.onboardingCharacterColor()}
          className="styled-btn--orange w-full">
          이전
        </Link>
        <button
          className="styled-btn--orange w-full"
          onClick={handleSubmit}
          disabled={!isValid || isPending}>
          {isPending ? <Spinner /> : "다음"}
        </button>
      </div>
    </>
  );
}
