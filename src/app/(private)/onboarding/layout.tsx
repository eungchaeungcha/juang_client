import { HeaderLayout } from "@/components";
import HeaderLayoutData from "./HeaderLayoutData";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeaderLayout.Wrapper>
      <HeaderLayoutData />
      <HeaderLayout.Content className="flex flex-col justify-between">
        {children}
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
