"use client";

import Link from "next/link";
import useValidateParams from "@/hooks/useValidateParams";

const variablesByMode = {
  create: {
    guide: "우리 가족 감나무만의 이름을 지어주세요",
    placeholder: "화목한 김가네의 주렁주렁 감나무",
    otherLink: {
      href: "/onboarding/join/code",
      text: "이미 감나무 코드를 받으셨나요?",
    },
  },
  code: {
    guide: "우리 가족의 고유 코드를 입력해 주세요",
    placeholder: "071409",
    otherLink: {
      href: "/onboarding/join/create",
      text: "아직 개설된 감나무가 없나요?",
    },
  },
} as const;

export default function Page() {
  const { mode } = useValidateParams<{ mode: "create" | "code" }>({
    validator: ({ mode }) => ["create", "code"].includes(mode),
    redirect: "/onboarding/join",
  });

  return (
    <div className="flex flex-col justify-center h-full gap-16 px-8">
      <div>
        <div className="text-gray-primary px-2 mb-2 text-center text-sm break-keep">
          {variablesByMode[mode].guide}
        </div>
        <input
          placeholder={variablesByMode[mode].placeholder}
          className="styled-input--lg text-center"
        />
      </div>

      <div className="flex-col-center gap-4">
        <button className="styled-btn--orange w-full">확인</button>
        <Link
          className="text-sm underline text-gray-primary"
          href={variablesByMode[mode].otherLink.href}>
          {variablesByMode[mode].otherLink.text}
        </Link>
      </div>
    </div>
  );
}
