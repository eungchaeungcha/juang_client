import React from "react";
import { HeaderLayout } from "@/components";
import { STEP_PARAMS, STEP_TITLE, StepParams } from "./stepConfig";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ step: StepParams }>;
}

const getStepProgress = (step: StepParams) => {
  return {
    currentStep: STEP_PARAMS.indexOf(step) + 1,
    maxStep: STEP_PARAMS.length,
  };
};

export default async function Layout({ children, params }: LayoutProps) {
  const step = (await params).step;

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Progressbar {...getStepProgress(step)} />
      <HeaderLayout.Title title={STEP_TITLE[step]} />
      <HeaderLayout.Content>{children}</HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
