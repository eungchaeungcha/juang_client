import TreeHeader from "./TreeHeader";
import TreeQuestion from "./TreeQuestion";
import TreeUser from "./TreeUser";
import TreeUtils from "./TreeUtils";

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <TreeHeader />
      <div className="flex flex-col w-full flex-grow relative">
        {/* 뒷배경 벽 */}
        <div className="absolute w-full h-full border-b-[6rem] bg-gray-100 border-b-gray-200 border-l-[4rem] border-r-[4rem] border-r-gray-50 border-l-gray-50" />
        <div className="relative w-full h-full flex flex-col items-center flex-grow gap-4">
          <TreeUtils />
          <TreeUser />
        </div>
      </div>
      <div className="bg-gray-200 p-4 pb-6">
        <TreeQuestion />
      </div>
    </div>
  );
}
