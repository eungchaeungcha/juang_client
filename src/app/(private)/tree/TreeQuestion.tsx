import TodayQuestion from "@/components/data/TodayQuestion";

export default function TreeQuestion() {
  return (
    <div className="flex-col-center p-4 rounded-xl bg-white w-full shadow-md">
      <div className="font-bold text-lg p-4">
        <span className="text-orange-secondary text-xl">Q. </span>
        <TodayQuestion
          loadingFallback={
            <span className="animate-pulse">질문 불러오는 중</span>
          }
          errorFallback="가족에게 하고싶은 말 한마디" // 임시, 에러 해결되면 수정해야 함
        />
      </div>
      <div className="styled-btn w-fit bg-green-primary text-white">
        답변하기
      </div>
    </div>
  );
}
