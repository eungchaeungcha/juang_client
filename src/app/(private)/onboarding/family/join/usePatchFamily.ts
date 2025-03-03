import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/services";
import {
  FamilyCodeFormType,
  FamilyCodeSchema,
} from "@/schemas/FamilyCodeSchema";

export const usePatchFamily = () => {
  const { watch, register, formState } = useForm<FamilyCodeFormType>({
    resolver: zodResolver(FamilyCodeSchema),
    mode: "onTouched",
  });
  const code = watch("code");

  const {
    mutate: patchFamily,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: usersApi.patchUserFamily,
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
