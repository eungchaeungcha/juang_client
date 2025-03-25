"use client";

import Link from "next/link";
import { usePostFamily } from "@/services/family";
import { AutoFixedInput } from "@/components/form";
import { ShowError, Spinner } from "@/components/ui";
import { routePaths } from "@/constants/route";
import FamilySuccessAnimation from "../FamilySuccessAnimation";

export default function Page() {
  const {
    register,
    handleSubmit,
    isPending,
    isSuccess,
    formState: { errors, isValid },
  } = usePostFamily();

  if (isSuccess) {
    return <FamilySuccessAnimation nextPage={routePaths.private.tree} />;
  }

  return (
    <div className="flex flex-col justify-center h-full gap-16 px-8">
      <div>
        <div className="text-orange-primary font-bold px-2 mb-2 text-center break-keep">
          우리 가족 감나무만의 이름을 지어주세요
        </div>
        <div className="h-20 flex-col-center">
          <AutoFixedInput
            {...register("name")}
            placeholder="화목한 주렁주렁 "
            suffix="감나무"
          />
          <ShowError
            errors={errors}
            name="name"
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
          href={routePaths.private.onboardingFamilyJoin}>
          이미 감나무 코드를 받으셨나요?
        </Link>
      </div>
    </div>
  );
}
