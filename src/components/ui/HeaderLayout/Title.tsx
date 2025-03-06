"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

interface TitleProps {
  title: string;
  prev?: boolean | string;
}

const Title = ({ title, prev }: TitleProps) => {
  const router = useRouter();
  const handleClickPrev = () => {
    if (typeof prev === "string") {
      router.push(prev);
    } else {
      router.back();
    }
  };

  return (
    <div className="w-full flex-col-center px-4">
      <div className="w-full flex flex-row justify-between items-center">
        {prev && (
          <FaChevronLeft
            className="styled-click text-xl text-gray-dark"
            onClick={handleClickPrev}
          />
        )}
        <div className="w-full text-center py-4 font-bold text-lg">{title}</div>
      </div>
      <div className="w-full h-[0.1rem] bg-gray-light" />
    </div>
  );
};

export default Title;
