import { Params } from "next/dist/server/request/params";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

interface ValidateParamsOption<P> {
  validator?: (params: P) => boolean;
  redirect?: string;
}

export const useValidateParams = <P extends Params>({
  validator,
  redirect,
}: ValidateParamsOption<P>) => {
  const params = useParams<P>();
  const router = useRouter();

  useEffect(() => {
    if (!(Boolean(params) && validator?.(params))) {
      return router.replace(redirect ?? "not-found");
    }
  }, [params, redirect, router, validator]);

  return params;
};
