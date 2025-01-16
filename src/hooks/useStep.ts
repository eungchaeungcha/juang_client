import { useCallback, useMemo, useState } from "react";

interface UseStepOption {
  maxStep: number;
  validators: Array<() => boolean>;
}

const useStep = ({ maxStep, validators }: UseStepOption) => {
  const [currentStep, setCurrentStep] = useState(1);

  const canGoNextStep = useMemo(() => {
    return currentStep < maxStep && validators[currentStep - 1]?.();
  }, [currentStep, maxStep, validators]);

  const canGoPrevStep = currentStep > 1;

  const goNextStep = useCallback(() => {
    if (canGoNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoNextStep]);

  const goPrevStep = useCallback(() => {
    if (canGoPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoPrevStep]);

  const showStepContent = (...components: React.ReactNode[]) => {
    return components[currentStep - 1];
  };

  return {
    currentStep,
    canGoPrevStep,
    canGoNextStep,
    goPrevStep,
    goNextStep,
    showStepContent,
  };
};

export default useStep;
