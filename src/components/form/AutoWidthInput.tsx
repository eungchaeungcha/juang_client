"use client";

import {
  ComponentPropsWithRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

export default function AutoWidthInput({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"input">) {
  const [spanElement, setSpanElement] = useState<HTMLSpanElement | null>(null);
  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(
    null,
  );

  useImperativeHandle(ref, () => inputElement!);

  useEffect(() => {
    if (inputElement && spanElement) {
      spanElement.innerText = inputElement.value;
    }
  }, [inputElement, spanElement]);

  return (
    <div className={twMerge("flex flex-col w-min", className)}>
      <input
        {...props}
        ref={setInputElement}
        className="outline-none inline-block w-full"
      />
      <div
        ref={setSpanElement}
        className="whitespace-nowrap invisible h-0">
        {inputElement?.value || inputElement?.placeholder}
      </div>
    </div>
  );
}
