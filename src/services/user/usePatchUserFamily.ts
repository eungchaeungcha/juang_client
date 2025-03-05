import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/api";
import { useUserData } from "@/services/user";
import {
  FamilyCodeFormType,
  FamilyCodeSchema,
} from "@/schemas/FamilyCodeSchema";

export const usePatchUserFamily = () => {
  const { watch, register, formState } = useForm<FamilyCodeFormType>({
    resolver: zodResolver(FamilyCodeSchema),
    mode: "onTouched",
  });
  const code = watch("code");

  const { reloadUserData } = useUserData();

  const {
    mutate: patchFamily,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: usersApi.patchUserFamily,
    onSuccess: reloadUserData,
  });

  const handleSubmit = () => {
    patchFamily({ code });
  };

  return {
    register,
    handleSubmit,
    formState,
    isPending,
    isSuccess,
  };
};
