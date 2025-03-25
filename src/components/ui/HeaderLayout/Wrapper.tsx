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

export default Wrapper;
