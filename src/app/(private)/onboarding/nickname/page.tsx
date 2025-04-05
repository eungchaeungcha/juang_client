import { BallonBox } from "@/components/ui";
import { UserCharacterImage } from "@/components/data";
import NicknameForm from "./NicknameForm";

export default async function Page() {
  return (
    <>
      <div className="w-full flex-col-center gap-6 pt-12 pb-8">
        <div className="relative aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light">
          <UserCharacterImage
            fill
            className="object-contain scale-[80%]"
          />
        </div>
        <BallonBox
          dir="up"
          className="text-center w-4/5 rounded-xl bg-gray-light p-4 break-keep">
          나를
          <span className="text-orange-secondary"> 잘 나타낼 수 있는 별명</span>
          을 지어주세요!
        </BallonBox>
      </div>
      <NicknameForm />
    </>
  );
}
