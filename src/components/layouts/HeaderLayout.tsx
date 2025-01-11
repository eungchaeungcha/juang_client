interface HeaderLayoutProps {
  title: string;
  progress?: `${number}/${number}`;
  children: React.ReactNode;
}

export default function HeaderLayout({ title, progress, children }: HeaderLayoutProps) {
  const [currentProgress, fullProgress] = (progress ?? '0/1').split('/').map(Number);
  const progressWidth = `${(currentProgress / fullProgress) * 100}%`;

  return (
    <div className='w-full h-full flex-col-center'>
      {progress && (
        <div className='w-full h-1 bg-gray-light'>
          <div className='h-full bg-orange-primary' style={{ width: progressWidth }} />
        </div>
      )}
      <header className='w-full h-12 flex-col-center border-b-2 border-gray-light font-bold'>{title}</header>
      <div className='w-full h-full'>{children}</div>
    </div>
  );
}
