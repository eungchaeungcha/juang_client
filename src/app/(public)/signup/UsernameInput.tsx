import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormContext, useWatch } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { authApi } from "@/api";
import { ShowError, Spinner } from "@/components/ui";
import { SignupFormType } from "@/schemas/SignupSchema";
import queryKeys from "@/constants/queryKeys";

export default function UsernameInput() {
  const {
    register,
    formState: { errors },
    setValue,
    setFocus,
    trigger,
  } = useFormContext<SignupFormType>();

  const { usernameDuplicated, username = "" } = useWatch<SignupFormType>();

  const { data, refetch, isFetching } = useQuery({
    queryKey: queryKeys.auth.usernameDuplicate({ username }),
    queryFn: () => authApi.getUsernameDuplicate({ username }),
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      const isDuplicated = data.duplicate;
      setValue("usernameDuplicated", isDuplicated);
      trigger("usernameDuplicated");

      if (isDuplicated) {
        setFocus("username");
      }
    }
  }, [data, setFocus, setValue, trigger]);

  const handleClickDuplicateCheck = () => {
    if (errors.username) return;
    refetch();
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-bold px-1">아이디를 입력해주세요.</label>
      <div className="flex flex-col gap-1">
        <div className="flex-row-center gap-2">
          <input
            className="styled-input"
            placeholder="아이디"
            {...register("username", {
              required: true,
              onBlur: () => {
                trigger("usernameDuplicated");
              },
              onChange: () => {
                if (usernameDuplicated !== undefined) {
                  setValue("usernameDuplicated", undefined!);
                }
              },
            })}
          />
          {usernameDuplicated !== false ? (
            <button
              type="button"
              className="text-xs flex-shrink-0 styled-click bg-gray-light p-2 rounded-md"
              onClick={handleClickDuplicateCheck}>
              {isFetching ? <Spinner size={16} /> : "중복 확인"}
            </button>
          ) : (
            <FaCheck className="text-orange-primary" />
          )}
        </div>
        <ShowError
          errors={errors}
          name="username"
          className="text-xs text-orange-primary px-1"
        />
        {!errors.username && (
          <ShowError
            errors={errors}
            name="usernameDuplicated"
            className="text-xs text-orange-primary px-1"
          />
        )}
      </div>
    </div>
  );
}
