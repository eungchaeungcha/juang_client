import { useFormContext, useWatch } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { ShowError } from "@/components";
import { SignupFormType } from "./SignupSchema";

export default function UsernameInput() {
  const {
    register,
    formState: { errors },
    setValue,
    setFocus,
    trigger,
  } = useFormContext<SignupFormType>();

  const { usernameUnique } = useWatch<SignupFormType>();

  const handleClickDuplicateCheck = () => {
    if (errors.username) return;
    const isUnique = true; // 임시값, API 요청 결과로 대체 예정

    setValue("usernameUnique", isUnique);
    trigger("usernameUnique");

    if (!isUnique) {
      setFocus("username");
    }
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
                trigger("usernameUnique");
              },
              onChange: () => {
                if (!errors.usernameUnique) {
                  setValue("usernameUnique", undefined!);
                }
              },
            })}
          />
          {!usernameUnique ? (
            <button
              type="button"
              className="text-xs flex-shrink-0 styled-click bg-gray-light p-2 rounded-md"
              onClick={handleClickDuplicateCheck}>
              중복 확인
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
            name="usernameUnique"
            className="text-xs text-orange-primary px-1"
          />
        )}
      </div>
    </div>
  );
}
