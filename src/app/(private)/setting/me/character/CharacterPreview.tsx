import { useFormContext } from "react-hook-form";
import { FaDice } from "react-icons/fa";
import { CustomCharacter } from "@/components/ui";
import { getRandomNumber } from "@/utils/getRandomNumber";
import {
  CharacterColor,
  CharacterFormType,
  CharacterName,
} from "@/schemas/CharacterSchema";

export default function CharacterPreview() {
  const { setValue, watch } = useFormContext<CharacterFormType>();

  const randomizeCharacter = () => {
    setValue("name", CharacterName.options[getRandomNumber(0, 8)]);
    setValue("color", CharacterColor.options[getRandomNumber(0, 8)]);
  };

  return (
    <div className="m-8 relative">
      <CustomCharacter
        className="aspect-square p-5 w-48 h-48 rounded-full border-4 border-gray-light"
        {...watch()}
      />
      <button
        className="text-2xl text-white bg-orange-primary p-2 rounded-full absolute right-0 bottom-4 styled-click shadow-md"
        onClick={randomizeCharacter}>
        <FaDice />
      </button>
    </div>
  );
}
