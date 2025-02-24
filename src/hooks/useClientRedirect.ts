import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * redirectFn => string : 리다이렉트 (replace), redirectChecked = true
 * redirectFn => null : 아무 일도 일어나지 않음.
 */

export const useClientRedirect = (redirectFn: () => string | null) => {
  const [redirectChecked, setRedirectChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (redirectChecked) return;
    const newRoute = redirectFn();
    if (newRoute) {
      router.replace(newRoute);
      setRedirectChecked(true);
    }
  }, [redirectChecked, redirectFn, router]);

  const ClientRedirect = ({ children }: { children?: React.ReactNode }) => {
    if (!redirectChecked) return null;
    return children;
  };

  return { ClientRedirect };
};
