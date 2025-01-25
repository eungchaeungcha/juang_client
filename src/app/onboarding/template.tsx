"use client";

import React from "react";
import { HeaderLayout } from "@/components";
import { STEP_PARAMS, STEP_TITLE, StepParams } from "./stepConfig";
import { useSelectedLayoutSegment } from "next/navigation";

const getStepProgress = (step: StepParams) => {
  return {
    currentStep: STEP_PARAMS.indexOf(step) + 1,
    maxStep: STEP_PARAMS.length,
  };
};

const isValidSegment = (segment: string | null): segment is StepParams => {
  return segment !== null && STEP_PARAMS.includes(segment as StepParams);
};

export default function Template({ children }: { children: React.ReactNode }) {
  const step = useSelectedLayoutSegment();

  if (!isValidSegment(step)) {
    return null;
  }

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Progressbar {...getStepProgress(step)} />
      <HeaderLayout.Title title={STEP_TITLE[step]} />
      <HeaderLayout.Content className="flex flex-col justify-between">
        {children}
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
