import { useFormContext } from "react-hook-form";
import { ShowError } from "@/components";
import { SignupFormType } from "./SignupSchema";

export default function UsernameInput() {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext<SignupFormType>();

  const handleClickDuplicateCheck = () => {
    setValue("usernameUnique", true);
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
            })}
          />
          <button
            className="text-xs flex-shrink-0 styled-click bg-gray-light p-2 rounded-md"
            onClick={handleClickDuplicateCheck}>
            중복 확인
          </button>
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
