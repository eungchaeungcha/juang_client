import TreeHeader from "./TreeHeader";
import TreeQuestion from "./TreeQuestion";
import TreeRoom from "./TreeRoom";

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <TreeHeader />
      <TreeRoom />
      <TreeQuestion />
    </div>
  );
}
