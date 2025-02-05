import { FaTree, FaUser } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { CustomCharacter } from "@/components";

const mainPageValues = {
  treeName: "화목한 김가네",
  userName: "둥글둥글 빤딱빤딱",
};

export default function Page() {
  return (
    <div className="h-full flex flex-col bg-yellow-50">
      {/* TOP - 감나무 제목, 유저 설정 버튼, 나무 설정 버튼 */}
      <div className="bg-orange-primary p-4 border-b-4 border-orange-secondray">
        <div className="flex gap-2 justify-end text-orange-secondray text-lg">
          <div className="bg-white flex-col-center w-fit p-1 rounded-full styled-click">
            <FaUser />
          </div>
          <div className="bg-white flex-col-center w-fit p-1 rounded-full styled-click">
            <FaTree />
          </div>
        </div>
        <div className="text-white font-bold w-fit p-2 text-2xl">
          <div>{mainPageValues.treeName} 감나무</div>
          <div>{mainPageValues.userName}감</div>
        </div>
      </div>
      <div className="flex flex-col w-full flex-grow relative">
        <div className="flex-grow border-b-[2rem] bg-gray-200 border-b-gray-300 border-l-[5rem] border-r-[5rem] border-r-gray-100 border-l-gray-100" />
        <CustomCharacter
          className="absolute left-0 right-0 bottom-0 m-auto h-[55%]"
          charId="character1"
        />
        <FcCalendar className="absolute text-5xl left-24 top-8" />
      </div>
      <div className="flex flex-grow bg-gray-300 w-full " />
    </div>
  );
}
