"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

interface TitleProps {
  title: string;
  prev?: boolean | string;
}

const Title = ({ title, prev }: TitleProps) => {
  const router = useRouter();

  return (
    <div className="w-full flex-col-center px-4">
      <div className="w-full flex flex-row justify-between items-center">
        {typeof prev === "string" ? (
          <Link href={prev}>
            <FaChevronLeft className="styled-click text-xl text-gray-dark" />
          </Link>
        ) : (
          <FaChevronLeft
            className="styled-click text-xl text-gray-dark"
            onClick={() => router.back()}
          />
        )}
        <div className="w-full text-center py-4 font-bold text-lg">{title}</div>
      </div>
      <div className="w-full h-[0.1rem] bg-gray-light" />
    </div>
  );
};

export default Title;
