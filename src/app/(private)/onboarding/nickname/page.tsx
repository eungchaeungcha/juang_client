import { BallonBox } from "@/components";
import CharacterImage from "./CharacterImage";
import NicknameForm from "./NicknameForm";

export default async function Page() {
  return (
    <>
      <div className="w-full flex-col-center gap-6 pt-12 pb-8">
        <CharacterImage className="aspect-square w-[16rem] h-[16rem] p-6 rounded-full border-4 border-gray-light" />
        <BallonBox
          dir="up"
          className="text-center w-4/5 rounded-xl bg-gray-light p-4 break-keep">
          나를
          <span className="text-orange-secondray"> 잘 나타낼 수 있는 별명</span>
          을 지어주세요!
        </BallonBox>
      </div>
      <NicknameForm />
    </>
  );
}
