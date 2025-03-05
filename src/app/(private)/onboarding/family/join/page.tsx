"use client";

import Link from "next/link";
import { usePatchUserFamily } from "@/services/user";
import { ShowError, Spinner } from "@/components";
import { routePaths } from "@/constants/route";
import FamilySuccessAnimation from "../FamilySuccessAnimation";

export default function Page() {
  const {
    register,
    handleSubmit,
    isPending,
    isSuccess,
    formState: { errors, isValid },
  } = usePatchUserFamily();

  if (isSuccess) {
    return <FamilySuccessAnimation nextPage={routePaths.private.tree} />;
  }

  return (
    <div className="flex flex-col justify-center h-full gap-16 px-8">
      <div>
        <div className="text-orange-primary font-bold px-2 mb-2 text-center break-keep">
          우리 가족의 고유 코드를 입력해 주세요
        </div>
        <div className="h-20">
          <input
            {...register("code")}
            placeholder="071409"
            className="styled-input--lg text-center text-green-primary uppercase"
          />
          <ShowError
            errors={errors}
            name="code"
            className="text-xs text-orange-primary pt-1 text-center"
          />
        </div>
      </div>
      <div className="flex-col-center gap-4">
        <button
          className="styled-btn--orange w-full"
          onClick={handleSubmit}
          disabled={!isValid || isPending}>
          {isPending ? <Spinner /> : "확인"}
        </button>
        <Link
          className="text-sm underline text-gray-primary"
          href={routePaths.private.onboardingFamilyCreate}>
          아직 개설된 감나무가 없나요?
        </Link>
      </div>
    </div>
  );
}
