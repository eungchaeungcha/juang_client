import { useFormContext } from "react-hook-form";
import { SignupFormType } from "./SignupSchema";

export default function SignupInputGroup() {
  const { register } = useFormContext<SignupFormType>();

  return (
    <div className="px-8 py-10 flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-4">
        <label className="font-bold px-1">아이디를 입력해주세요.</label>
        <div className="flex-row-center gap-2">
          <input
            className="styled-input"
            placeholder="아이디"
            {...register("username", {
              required: true,
            })}
          />
          <button className="text-xs flex-shrink-0 styled-click bg-gray-light p-2 rounded-md">
            중복 확인
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="font-bold px-1">비밀번호를 입력해주세요.</label>
        <div className="flex flex-col gap-1">
          <input
            className="styled-input"
            placeholder="비밀번호"
            {...register("password", {
              required: true,
            })}
          />
          <input
            className="styled-input"
            placeholder="비밀번호 확인"
            {...register("passwordCheck", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}
