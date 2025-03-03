import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { familiesApi } from "@/services/families";
import { useUserData } from "@/hooks/useUserData";
import {
  FamilyNameFormType,
  FamilyNameSchema,
} from "@/schemas/FamilyNameSchema";

export const usePostFamily = () => {
  const { watch, register, formState } = useForm<FamilyNameFormType>({
    resolver: zodResolver(FamilyNameSchema),
    mode: "onTouched",
  });
  const name = watch("name");

  const { reloadUserData } = useUserData();

  const {
    mutate: createFamily,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: familiesApi.postFamily,
    onSuccess: reloadUserData,
  });

  const handleSubmit = () => {
    createFamily({ name: name + "감나무" });
  };

  return {
    register,
    handleSubmit,
    formState,
    isPending,
    isSuccess,
  };
};
