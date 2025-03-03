import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/services";
import { customToast } from "@/components";
import {
  FamilyCodeFormType,
  FamilyCodeSchema,
} from "@/schemas/FamilyCodeSchema";
import { routePaths } from "@/constants/route";

export const usePatchFamily = () => {
  const router = useRouter();

  const { watch, register, formState } = useForm<FamilyCodeFormType>({
    resolver: zodResolver(FamilyCodeSchema),
    mode: "onTouched",
  });
  const code = watch("code");

  const { mutate: patchFamily, isPending } = useMutation({
    mutationFn: usersApi.patchUserFamily,
    onSuccess: () => {
      customToast.success("감나무를 심었어요!"); // TODO: 애니메이션 화면 임시 대체
      router.push(routePaths.private.main);
    },
  });

  const handleSubmit = () => {
    patchFamily({ code });
  };

  return {
    register,
    handleSubmit,
    formState,
    isPending,
  };
};
