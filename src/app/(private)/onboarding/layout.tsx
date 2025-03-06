import { HeaderLayout } from "@/components/ui";

const pageTitle = {
  character: "감 캐릭터 만들기",
  nickname: "별명 정하기",
  family: "감나무 들어가기",
  default: "시작하기",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.ProgressByPage
        pageOrder={["character", "nickname", "family"]}
      />
      <HeaderLayout.TitleByPage titleMap={pageTitle} />
      <HeaderLayout.Content className="flex flex-col justify-between">
        {children}
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
