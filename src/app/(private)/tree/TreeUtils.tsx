import Link from "next/link";
import { CustomIcon } from "@/components/ui";
import { routePaths } from "@/constants/route";

export default function TreeUtils() {
  return (
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
  );
}
