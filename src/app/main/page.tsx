import { CustomCharacter } from "@/components";
import CustomIcon from "@/components/CustomIcon";

const mainPageValues = {
  treeName: "화목한 김가네 감나무",
  userName: "둥글둥글 빤딱빤딱감",
};

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      {/* TOP - 감나무 제목, 유저 설정 버튼, 나무 설정 버튼 */}
      <div className="bg-orange-primary p-4 border-b-4 border-orange-secondray flex-col-center">
        <div className="bg-orange-secondray px-4 py-1 mb-2 text-white w-fit rounded-full">
          우리집 감나무
        </div>
        <div className="text-white font-bold p-1 w-fit text-2xl">
          <div>{mainPageValues.treeName}</div>
        </div>
      </div>
      <div className="flex flex-col w-full flex-grow relative">
        <div className="flex-grow border-b-[2rem] bg-gray-200 border-b-gray-300 border-l-[4rem] border-r-[4rem] border-r-gray-100 border-l-gray-100" />
        <CustomCharacter
          className="absolute left-0 right-0 bottom-0 m-auto h-[55%]"
          charId="character1"
        />
        <div className="absolute left-0 right-0 w-[calc(100%-8rem)] p-3 m-auto flex justify-between">
          <CustomIcon
            className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
            icon="Calendar"
          />
          <div className="flex flex-col gap-3">
            <CustomIcon
              className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
              icon="Setting"
            />
            <CustomIcon
              className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
              icon="Profile"
            />
          </div>
        </div>
        <div className="absolute flex-col-center bg-white shadow-md ring-4 ring-orange-primary w-fit left-0 right-0 m-auto h-10 bottom-[-4rem] text-lg px-4 rounded-full font-bold tracking-wide">
          {mainPageValues.userName}
        </div>
      </div>
      <div className="flex flex-grow bg-gray-300 w-full" />
    </div>
  );
}
