import React, { ComponentPropsWithRef, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={twMerge("w-full h-full flex-col-center", className)}>
      {children}
    </div>
  );
};

interface TopProps {
  className?: string;
  children: React.ReactNode;
}

const Top = ({ className, children }: TopProps) => {
  return (
    <div className="w-full">
      <div className={twMerge("w-full p-4 text-center", className)}>
        {children}
      </div>
      <div className="styled-hr" />
    </div>
  );
};

interface ProgressbarProps {
  maxStep: number | `${number}`;
  currentStep: number | `${number}`;
}

const Progressbar = ({ maxStep, currentStep }: ProgressbarProps) => {
  const progressWidth = `${(Number(currentStep) / Number(maxStep)) * 100}%`;
  return (
    <div className="styled-hr">
      <div
        className="h-full bg-orange-primary duration-300"
        style={{ width: progressWidth }}
      />
    </div>
  );
};

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex-col-center">
      <div className="w-full text-center py-4 font-bold text-lg">{title}</div>
      <div className="w-[90%] h-[0.1rem] bg-gray-light" />
    </div>
  );
};

type ContentProps<T extends ElementType = "div"> = ComponentPropsWithRef<T> & {
  as?: T;
  children: React.ReactNode;
};

const Content = <T extends ElementType>({
  children,
  className,
  as,
  ...props
}: ContentProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={twMerge("w-full flex-grow overflow-auto", className)}
      {...props}>
      {children}
    </Component>
  );
};

const HeaderLayout = {
  Wrapper,
  Top,
  Progressbar,
  Title,
  Content,
};

export default HeaderLayout;
