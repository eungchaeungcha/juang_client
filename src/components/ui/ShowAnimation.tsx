"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ShowAnimationProps {
  duration?: number;
  onEnd?: VoidFunction;
  children: React.ReactNode;
}

export function AnimationContainer() {
  return (
    <section
      id="animation_container"
      className="relative w-full"></section>
  );
}

export function ShowAnimation({
  duration,
  onEnd,
  children,
}: ShowAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("animation_container"));
  }, []);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onEnd?.();
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onEnd]);

  if (!isVisible || !container) return null;

  return createPortal(
    <div className="absolute w-full h-svh bg-white z-10">{children}</div>,
    container,
  );
}
