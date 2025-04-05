import Link from "next/link";
import { CustomCharacter, CustomIcon } from "@/components/ui";
import { routePaths } from "@/constants/route";

const mainPageValues = {
  treeName: "화목한 김가네 감나무",
  userName: "둥글둥글 빤딱빤딱감",
};

export default async function Page() {
  return (
    <div className="h-full flex flex-col">
      {/* 상단 - 감나무 이름 */}
      <div className="bg-orange-primary p-4 border-b-4 border-orange-secondray flex-col-center">
        <div className="bg-orange-secondray px-4 py-1 mb-2 text-white w-fit rounded-full">
          우리집 감나무
        </div>
        <div className="text-white font-bold p-1 w-fit text-2xl">
          <div>{mainPageValues.treeName}</div>
        </div>
      </div>
      {/* 하단 - 감 캐릭터와 버튼들, 질문들 */}
      <div className="flex flex-col w-full flex-grow relative">
        {/* 뒷배경 벽 */}
        <div className="flex-grow border-b-[2rem] bg-gray-100 border-b-gray-200 border-l-[3rem] border-r-[3rem] border-r-gray-50 border-l-gray-50" />
        {/* 캐릭터 */}
        <CustomCharacter
          className="absolute left-0 right-0 bottom-0 m-auto h-[55%]"
          name="gam1"
        />
        {/* 감 별명 */}
        <div className="absolute flex-col-center bg-white shadow-md ring-4 ring-orange-primary w-fit left-0 right-0 m-auto h-10 bottom-[-4rem] text-lg px-4 rounded-full font-bold tracking-wide">
          {mainPageValues.userName}
        </div>
        {/* 유틸 버튼 */}
        <div className="absolute left-0 right-0 w-[calc(100%-6rem)] p-3 m-auto flex justify-between">
          <CustomIcon
            className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
            icon="Calendar"
          />
          <div className="flex flex-col gap-3">
            <Link href={routePaths.private.settingFamiliy}>
              <CustomIcon
                className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
                icon="Setting"
              />
            </Link>
            <Link href={routePaths.private.settingUser}>
              <CustomIcon
                className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
                icon="Profile"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* 아래 바닥 */}
      <div className="flex flex-grow bg-gray-200 w-full" />
    </div>
  );
}
