"use client";

import React, { ComponentProps } from "react";
import { useQuestionDetailData } from "@/services/question";

interface TodayQuestionProps extends ComponentProps<"div"> {
  errorFallback?: React.ReactNode;
  loadingFallback?: React.ReactNode;
}

export default function TodayQuestion({
  errorFallback,
  loadingFallback,
  ...props
}: TodayQuestionProps) {
  const { data, isError } = useQuestionDetailData({
    questionId: "today",
    retry: 0,
  });

  const { questionContent } = data ?? {};

  if (isError) {
    return errorFallback;
  }

  if (!questionContent) {
    return loadingFallback;
  }

  return <div {...props}>{questionContent}</div>;
}
