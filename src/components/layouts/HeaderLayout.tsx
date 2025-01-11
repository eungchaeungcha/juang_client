import { twMerge } from "tailwind-merge";

interface HeaderLayoutProps {
  title: string;
  progress?: `${number}/${number}`;
  children: React.ReactNode;
  className?: string;
}

export default function HeaderLayout({
  title,
  progress,
  children,
  className,
}: HeaderLayoutProps) {
  const [currentProgress, fullProgress] = (progress ?? "0/1")
    .split("/")
    .map(Number);
  const progressWidth = `${(currentProgress / fullProgress) * 100}%`;

  return (
    <div className="w-full h-full flex-col-center">
      {progress && (
        <div className="w-full h-1 bg-gray-light">
          <div
            className="h-full bg-orange-primary"
            style={{ width: progressWidth }}
          />
        </div>
      )}
      <header className="w-full py-4 flex-col-center border-b-2 border-gray-light font-bold">
        {title}
      </header>
      <div className={twMerge("w-full h-full", className)}>{children}</div>
    </div>
  );
}
