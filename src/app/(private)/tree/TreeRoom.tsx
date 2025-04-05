import Link from "next/link";
import { CustomIcon, UserCharacterImage, UserNickname } from "@/components/ui";
import { routePaths } from "@/constants/route";

export default function TreeRoom() {
  return (
    <div className="flex flex-col w-full flex-grow relative min-h-[20rem]">
      {/* 뒷배경 벽 */}
      <div className="absolute w-full h-full border-b-[6rem] bg-gray-100 border-b-gray-200 border-l-[4rem] border-r-[4rem] border-r-gray-50 border-l-gray-50" />
      {/* 컨텐츠 */}
      <div className="absolute w-full h-full flex flex-col items-center justify-between gap-4">
        {/* 유틸 버튼 */}
        <div className="w-[calc(100%-8rem)] p-3 flex justify-between gap-4">
          <CustomIcon
            className="flex-col-center bg-white rounded-full shadow-md styled-click w-14 h-14 p-2"
            icon="Calendar"
          />
          <div className="flex gap-4 flex-wrap justify-end">
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
        {/* 캐릭터 */}
        <div className="flex-grow w-full flex flex-col items-center justify-end gap-6">
          <div className="h-full w-[50%] min-w-40 min-h-40 relative">
            <div className="absolute-w-center w-full h-10 bg-gray-dark opacity-20 -bottom-2 rounded-[100%]" />
            <UserCharacterImage
              fill
              className="object-contain object-bottom"
            />
          </div>
          <UserNickname
            fallbackLength={8}
            className="flex-col-center bg-white shadow-md ring-4 ring-orange-primary w-fit text-lg px-4 py-2 rounded-full font-bold tracking-wide"
          />
        </div>
      </div>
    </div>
  );
}
