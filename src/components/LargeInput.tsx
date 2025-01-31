export default function NicknameInput({
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return (
    <div className="flex-col-center">
      <input
        {...props}
        className="styled-input--lg text-center"
      />
    </div>
  );
}
