"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import { FaChevronCircleRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  className?: string;
  onToggle: VoidFunction;
  isOpen: boolean;
  children: React.ReactNode;
  buttonText: string;
}

export default function Accordion({
  className,
  onToggle,
  isOpen,
  children,
  buttonText,
}: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge("overflow-hidden", className)}>
      <button
        className="flex gap-2 items-center p-4 styled-click w-full text-left text-gray-dark"
        onClick={onToggle}
        aria-expanded={isOpen}>
        <FaChevronCircleRight
          className={clsx("duration-200 text-xl text-orange-primary", {
            "rotate-90": isOpen,
          })}
        />
        {buttonText}
      </button>
      <div
        ref={contentRef}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}>
        {children}
      </div>
    </div>
  );
}
