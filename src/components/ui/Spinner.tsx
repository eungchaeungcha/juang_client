interface SpinnerProps {
  size?: number;
  color?: string;
  borderWidth?: number;
}

export default function Spinner({
  size = 24,
  color = "#fff",
  borderWidth = 4,
}: SpinnerProps) {
  return (
    <div
      className="animate-spin rounded-full border-white border-opacity-50 border-t-transparent"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: color,
        borderWidth: `${borderWidth}px`,
      }}
    />
  );
}
