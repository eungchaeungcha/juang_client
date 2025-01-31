"use client";

import useValidateParams from "@/hooks/useValidateParams";

export default function Page() {
  const { mode } = useValidateParams<{ mode: string }>({
    validator: ({ mode }) => mode === "create" || mode === "code",
    redirect: "/onboarding/join",
  });

  return <div>{mode}</div>;
}
