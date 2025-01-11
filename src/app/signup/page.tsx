import HeaderLayout from "@/components/layouts/HeaderLayout";

export default function Page() {
  return (
    <HeaderLayout
      title="회원 가입하기"
      className="py-10 px-8">
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label className="font-bold px-1">아이디를 입력해주세요.</label>
          <input
            className="styleset--input"
            placeholder="아이디"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold px-1">비밀번호를 입력해주세요.</label>
          <div className="flex flex-col gap-1">
            <input
              className="styleset--input"
              placeholder="비밀번호"
            />
            <input
              className="styleset--input"
              placeholder="비밀번호 확인"
            />
          </div>
        </div>
      </form>
    </HeaderLayout>
  );
}
