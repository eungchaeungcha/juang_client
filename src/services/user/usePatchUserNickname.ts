import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersApi } from "@/api";
import { useUserData } from "@/services/user";
import { NicknameFormType, NicknameSchema } from "@/schemas/NicknameSchema";

interface PatchUserNicknameOption {
  onSuccess?: VoidFunction;
  onSuccessRoute?: string;
}

export const usePatchUserNickname = ({
  onSuccess,
  onSuccessRoute,
}: PatchUserNicknameOption = {}) => {
  const router = useRouter();
  const handleSuccessPatch = () => {
    onSuccess?.();
    if (onSuccessRoute) {
      router.push(onSuccessRoute);
    }
  };

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
      handleSuccessPatch();
    },
  });

  const handleSubmit = () => {
    if (nickName === userNickName) {
      handleSuccessPatch();
      return;
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
