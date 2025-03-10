import React from "react";
import { TabLinkGroup } from "@/components/ui";
import { routePaths } from "@/constants/route";

const tabLinkItems = [
  { href: "/nickname", text: "닉네임 수정" },
  { href: "/character", text: "캐릭터 수정" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex gap-2 p-4">
        <TabLinkGroup
          basePath={routePaths.private.settingUser}
          items={tabLinkItems}
          className="styled-btn bg-gray-light text-gray-dark"
          activeClassName="bg-orange-primary text-white"
        />
      </div>
      <div className="h-full w-full flex-col-center">{children}</div>
    </>
  );
}
