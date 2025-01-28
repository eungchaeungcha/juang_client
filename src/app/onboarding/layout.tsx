import React from "react";
import OnboardingWrapper from "./components/OnboardingWrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnboardingWrapper>{children}</OnboardingWrapper>;
}
