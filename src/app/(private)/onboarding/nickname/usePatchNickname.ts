import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/services";
import { useUserData } from "@/hooks/useUserData";
import { NicknameFormType, NicknameSchema } from "@/schemas/NicknameSchema";
import { routePaths } from "@/constants/route";

export const usePatchNickname = () => {
  const router = useRouter();

  const { userData, reloadUserData } = useUserData();
  const userNickName = userData?.nickName?.slice(0, -1) ?? "";

  const {
    watch,
    register,
    formState: { errors, isValid },
  } = useForm<NicknameFormType>({
    values: { nickName: userNickName },
    resolver: zodResolver(NicknameSchema),
    mode: "onTouched",
  });
  const nickName = watch("nickName");

  const { mutate: patchNickname, isPending } = useMutation({
    mutationFn: usersApi.patchUserNickname,
    onSuccess: async () => {
      await reloadUserData();
      router.push(routePaths.private.onboardingFamily);
    },
  });

  const handleSubmit = () => {
    if (nickName === userNickName) {
      return router.push(routePaths.private.onboardingFamily);
    }
    patchNickname({ nickName: nickName + "감" });
  };

  return {
    register,
    handleSubmit,
    isValid,
    isPending,
    errors,
  };
};
