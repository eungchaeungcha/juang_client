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

export default Progressbar;
