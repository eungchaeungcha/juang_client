export default function NicknameInput(
  props: React.ComponentPropsWithRef<"input">
) {
  return (
    <div className="flex-col-center px-8">
      <input
        {...props}
        className="styled-input--lg text-center"
        placeholder="별명을 입력하세요"
      />
    </div>
  );
}
