import { UserCharacterImage, UserNickname } from "@/components/data";

export default function TreeUser() {
  return (
    <div className="flex-grow w-full flex flex-col items-center justify-end gap-6 relative p-4">
      <div className="h-full w-[50%] min-w-40 min-h-40 relative">
        <div className="absolute-w-center w-full h-10 bg-gray-dark opacity-20 -bottom-2 rounded-[100%]" />
        <UserCharacterImage
          fill
          className="object-contain object-bottom"
        />
      </div>
      <UserNickname
        fallbackLength={8}
        className="flex-col-center bg-white shadow-md text-gray-dark w-fit text-lg px-4 h-10 rounded-full font-bold tracking-wide"
      />
    </div>
  );
}
