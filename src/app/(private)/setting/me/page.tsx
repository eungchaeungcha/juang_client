"use client";

import {
  LogoutButton,
  UserCharacterImage,
  UserNickname,
} from "@/components/ui";

export default function Page() {
  return (
    <>
      <div className="h-full w-full flex-col-center gap-8 p-8">
        <div className="relative w-48 h-48 rounded-full border-4 border-gray-light">
          <UserCharacterImage
            fill
            className="object-contain scale-[80%]"
          />
        </div>
        <div className="relative text-2xl text-center font-bold border-b-2 border-gray-light w-full py-2">
          <UserNickname />
        </div>
      </div>
      <div className="w-full p-8">
        <LogoutButton />
      </div>
    </>
  );
}
