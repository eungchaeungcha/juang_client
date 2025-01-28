"use client";

import React from "react";
import { HeaderLayout } from "@/components";
import {
  getTemperalOnboardingData,
  STEP_PARAMS,
  STEP_TITLE,
  StepParams,
} from "../stepConfig";
import { useSelectedLayoutSegment } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { CharacterFormType } from "@/types/form";
import { CHARACTER_COLORS } from "@/constants/character";

const getStepProgress = (step: StepParams) => {
  return {
    currentStep: STEP_PARAMS.indexOf(step) + 1,
    maxStep: STEP_PARAMS.length,
  };
};

const isValidSegment = (segment: string | null): segment is StepParams => {
  return segment !== null && STEP_PARAMS.includes(segment as StepParams);
};

export default function OnboardingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const step = useSelectedLayoutSegment();
  const formMethods = useForm<CharacterFormType>({
    defaultValues: {
      character: getTemperalOnboardingData().character ?? "",
      color: getTemperalOnboardingData().color ?? CHARACTER_COLORS.orange,
    },
  });

  if (!isValidSegment(step)) {
    return children;
  }

  return (
    <HeaderLayout.Wrapper>
      <HeaderLayout.Progressbar {...getStepProgress(step)} />
      <HeaderLayout.Title title={STEP_TITLE[step]} />
      <HeaderLayout.Content className="flex flex-col justify-between">
        <FormProvider {...formMethods}>{children}</FormProvider>
      </HeaderLayout.Content>
    </HeaderLayout.Wrapper>
  );
}
