"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Progressbar from "./Progressbar";

interface ProgressByPageProps {
  pageOrder: string[];
}

const ProgressByPage = ({ pageOrder }: ProgressByPageProps) => {
  const pageName = useSelectedLayoutSegment();

  const maxStep = pageOrder.length;
  const currentStep = pageOrder.indexOf(pageName ?? "") + 1;

  return (
    <Progressbar
      maxStep={maxStep}
      currentStep={currentStep}
    />
  );
};

export default ProgressByPage;
