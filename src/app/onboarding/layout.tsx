import React from "react";
import { OnboardingProvider } from "./context";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
