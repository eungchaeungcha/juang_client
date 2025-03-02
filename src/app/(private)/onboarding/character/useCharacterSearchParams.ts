import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { routePaths } from "@/constants/route";

export const useCharacterSearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const target = searchParams.get("target");

  const setUrlNameParam = useCallback(() => {
    router.push(routePaths.withQueryParams.onboardingCharacterName());
  }, [router]);

  const setUrlColorParam = useCallback(
    () => router.push(routePaths.withQueryParams.onboardingCharacterColor()),
    [router],
  );

  useEffect(() => {
    if (!(target && ["name", "color"].includes(target))) {
      setUrlNameParam();
    }
  }, [setUrlNameParam, target]);

  return {
    target,
    setUrlNameParam,
    setUrlColorParam,
  };
};
