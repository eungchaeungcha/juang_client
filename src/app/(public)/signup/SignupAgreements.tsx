import { useFormContext, useWatch } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { CheckBox } from "@/components";
import { SignupFormType } from "@/schemas/SignupSchema";

export default function SignupAgreements() {
  const { register, setValue, trigger } = useFormContext<SignupFormType>();
  const {
    termsAgreement: { marketingInfo, privacyPolicy, termsOfService } = {},
  } = useWatch<SignupFormType>();

  const isAllChecked = Boolean(
    marketingInfo && privacyPolicy && termsOfService,
  );

  const handleCheckAll = () => {
    setValue("termsAgreement.termsOfService", !isAllChecked);
    setValue("termsAgreement.privacyPolicy", !isAllChecked);
    setValue("termsAgreement.marketingInfo", !isAllChecked);
    trigger("termsAgreement");
  };

  return (
    <div className="pt-6 flex-col-center gap-4">
      <FaCheckCircle
        size={50}
        className="text-green-primary"
      />
      <p className="text-center font-bold mb-4">
        필수 이용 약관에 동의하셔야
        <br />
        서비스 이용이 가능합니다.
      </p>
      <div className="tracking-tighter w-fit">
        <div className="w-full flex flex-col gap-1">
          <CheckBox
            text="전체 동의 (선택 항목 포함)"
            checked={isAllChecked}
            onChange={handleCheckAll}
          />
          <CheckBox
            text="이용 약관 (필수)"
            {...register("termsAgreement.termsOfService", { required: true })}
          />
          <CheckBox
            text="개인정보 수집 및 이용에 대한 안내 (필수)"
            {...register("termsAgreement.privacyPolicy", { required: true })}
          />
          <CheckBox
            text="이벤트, 광고성 정보 안내 (선택)"
            {...register("termsAgreement.marketingInfo")}
          />
        </div>
      </div>
    </div>
  );
}
