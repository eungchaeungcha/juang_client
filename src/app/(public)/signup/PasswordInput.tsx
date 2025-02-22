import { useFormContext } from "react-hook-form";
import { ShowError } from "@/components";
import { SignupFormType } from "./SignupSchema";

export default function PasswordInput() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<SignupFormType>();

  return (
    <div className="flex flex-col gap-4">
      <label className="font-bold px-1">비밀번호를 입력해주세요.</label>
      <div className="flex flex-col gap-1">
        <input
          className="styled-input"
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: true,
            onChange: () => {
              trigger("passwordCheck");
            },
          })}
        />
        <ShowError
          errors={errors}
          name="password"
          className="text-xs text-orange-primary px-1"
        />
        <input
          className="styled-input"
          type="password"
          placeholder="비밀번호 확인"
          {...register("passwordCheck", { required: true })}
        />
        <ShowError
          errors={errors}
          name="passwordCheck"
          className="text-xs text-orange-primary px-1"
        />
      </div>
    </div>
  );
}
