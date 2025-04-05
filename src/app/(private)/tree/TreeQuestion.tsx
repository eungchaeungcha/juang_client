import TodayQuestion from "@/components/data/TodayQuestion";

export default function TreeQuestion() {
  return (
    <div className="flex-col-center p-4 rounded-xl bg-white w-full shadow-md">
      <div className="font-bold text-lg p-4">
        <span className="text-orange-secondary text-xl">Q. </span>
        <TodayQuestion
          loadingFallback="오늘의 질문을 불러오고 있어요"
          errorFallback="가족에게 하고싶은 말 한마디" // 임시, 에러 해결되면 수정해야 함
        />
      </div>
      <div className="styled-btn w-fit bg-green-primary text-white">
        답변하기
      </div>
    </div>
  );
}
