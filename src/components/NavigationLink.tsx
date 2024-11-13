"use client";

import { Link } from "@/navigation";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavigationLink({
  href,
  children,
  ...rest
}: LinkProps & { children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={isActive ? "text-green-600" : "text-gray-800"}
      href={href}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
