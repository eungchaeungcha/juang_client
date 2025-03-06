import { ComponentPropsWithRef, ElementType } from "react";
import { twMerge } from "tailwind-merge";

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

export default Content;
