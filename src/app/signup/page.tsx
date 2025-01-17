import CheckList from "@/components/ui/CheckList";
import Layout from "@/components/layout/HeaderLayout";
import { FaCheckCircle } from "react-icons/fa";

const TERM_OF_USE_DATA = [
  {
    id: "usage",
    text: "이용 약관 (필수)",
  },
  {
    id: "information",
    text: "개인정보 수집 및 이용에 대한 안내 (필수)",
  },
  {
    id: "marketing",
    text: "이벤트, 광고성 정보 안내 (선택)",
  },
];

export default function Page() {
  return (
    <Layout.Wrapper>
      <Layout.Title title="회원 가입하기" />
      <Layout.Content className="flex flex-col justify-between">
        <div className="px-8 py-10 flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-4">
            <label className="font-bold px-1">아이디를 입력해주세요.</label>
            <input
              className="styled-input"
              placeholder="아이디"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="font-bold px-1">비밀번호를 입력해주세요.</label>
            <div className="flex flex-col gap-1">
              <input
                className="styled-input"
                placeholder="비밀번호"
              />
              <input
                className="styled-input"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>
        </div>
        <div className="styled-hr" />
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
            <CheckList
              totalLabel="전체 동의 (선택 항목 포함)"
              items={TERM_OF_USE_DATA.map((data) => ({
                ...data,
                checked: false,
              }))}
            />
          </div>
          <p className="text-gray-primary text-sm tracking-tighter">
            서비스 이용을 위해 약관을 확인하고 동의해주세요.
          </p>
        </div>
        <div className="w-full flex items-end p-8">
          <button className="styled-btn--orange w-full">다음</button>
        </div>
      </Layout.Content>
    </Layout.Wrapper>
  );
}
