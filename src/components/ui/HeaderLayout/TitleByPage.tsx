"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import Title from "./Title";

interface TitleMap {
  default: string;
  [pageName: string]: string;
}

interface HeaderTitleByPageProps {
  titleMap: TitleMap;
  prev?: boolean | string;
}

const HeaderTitleByPage = ({ titleMap, prev }: HeaderTitleByPageProps) => {
  const pageNames = useSelectedLayoutSegments();
  const pageName = pageNames.join("/");
  const title = pageName ? titleMap[pageName] : titleMap.default;

  return (
    <Title
      title={title ?? titleMap.default}
      prev={prev}
    />
  );
};

export default HeaderTitleByPage;
