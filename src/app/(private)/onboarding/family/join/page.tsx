import Link from "next/link";
import { routePaths } from "@/constants/route";

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-full gap-16 px-8">
      <div>
        <div className="text-orange-primary font-bold px-2 mb-2 text-center break-keep">
          우리 가족의 고유 코드를 입력해 주세요
        </div>
        <input
          placeholder="071409"
          className="styled-input--lg text-center"
        />
      </div>

      <div className="flex-col-center gap-4">
        <button className="styled-btn--orange w-full">확인</button>
        <Link
          className="text-sm underline text-gray-primary"
          href={routePaths.private.onboardingFamilyCreate}>
          아직 개설된 감나무가 없나요?
        </Link>
      </div>
    </div>
  );
}
