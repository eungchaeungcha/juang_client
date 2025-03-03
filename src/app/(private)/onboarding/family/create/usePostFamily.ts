import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { familiesApi } from "@/services/families";
import { customToast } from "@/components";
import {
  FamilyNameFormType,
  FamilyNameSchema,
} from "@/schemas/FamilyNameSchema";
import { routePaths } from "@/constants/route";

export const usePostFamily = () => {
  const router = useRouter();

  const { watch, register, formState } = useForm<FamilyNameFormType>({
    resolver: zodResolver(FamilyNameSchema),
    mode: "onTouched",
  });
  const name = watch("name");

  const { mutate: createFamily, isPending } = useMutation({
    mutationFn: familiesApi.postFamily,
    onSuccess: () => {
      customToast.success("감나무를 심었어요!"); // TODO: 애니메이션 화면 임시 대체
      router.push(routePaths.private.main);
    },
  });

  const handleSubmit = () => {
    createFamily({ name: name + "감나무" });
  };

  return {
    register,
    handleSubmit,
    formState,
    isPending,
  };
};
