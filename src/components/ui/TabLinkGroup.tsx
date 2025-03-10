"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TabLinkItem {
  href: string;
  text: string;
}

interface TabLinkGroupProps {
  basePath: string;
  activeClassName?: string;
  className: string;
  items: TabLinkItem[];
}

export default function TabLinkGroup({
  basePath,
  activeClassName = "",
  className,
  items,
}: TabLinkGroupProps) {
  const pathname = usePathname();

  return items.map(({ href, text }) => (
    <Link
      key={href}
      href={basePath + href}
      replace={pathname !== basePath}
      className={twMerge(
        className,
        clsx({
          [activeClassName]:
            basePath === pathname || basePath + href === pathname,
        }),
      )}>
      {text}
    </Link>
  ));
}
