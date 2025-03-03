import Link from "next/link";
import { FixedInput } from "@/components";
import { routePaths } from "@/constants/route";

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-full gap-16 px-8">
      <div>
        <div className="text-orange-primary font-bold px-2 mb-2 text-center break-keep">
          우리 가족 감나무만의 이름을 지어주세요
        </div>
        <FixedInput
          placeholder="화목한 김가네 주렁주렁"
          suffix="감나무"
        />
      </div>
      <div className="flex-col-center gap-4">
        <button className="styled-btn--orange w-full">확인</button>
        <Link
          className="text-sm underline text-gray-primary"
          href={routePaths.private.onboardingFamilyJoin}>
          이미 감나무 코드를 받으셨나요?
        </Link>
      </div>
    </div>
  );
}
