"use client";

import { CHARACTER_COLORS } from "@/constants/character";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const useOnboarding = () => {
  const [color, setColor] = useState<string>(CHARACTER_COLORS.orange);
  const [character, setCharacter] = useState<string | undefined>();
  const [nickname, setNickname] = useState("");

  const setOnboarding = useCallback((step: string, value: string) => {
    if (step === "color") {
      setColor(value);
    } else if (step === "character") {
      setCharacter(value);
    } else if (step === "nickname") {
      setNickname(value);
    }
  }, []);

  return {
    color,
    character,
    nickname,
    setOnboarding,
  };
};

const OnboardingContext = createContext<ReturnType<
  typeof useOnboarding
> | null>(null);

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const context = useOnboarding();

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <OnboardingContext.Provider value={context}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (context === null) {
    throw new Error("useOnboardingContext must be in OnboardingProvider");
  }
  return context;
};
