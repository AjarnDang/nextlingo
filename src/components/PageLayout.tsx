"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "@/components/Navigation";
import DabuzzzText from "./DabuzzzText";
import FooterMain from "@/components/Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage =
    pathname === "/en/home" ||
    pathname === "/th/home" ||
    pathname === "/th" ||
    pathname === "/en";

  return (
    <div className={isHomePage ? "bg-[#F4F8F3]" : ""}>
      <Header />

      <div
        className={`flex flex-col custom-min-h mx-auto ${
          !isHomePage ? "lg:pt-28 pt-24" : ""
        }`}
      >
        <div className="flex-grow py-4 lg:px-60 px-4">{children}</div>
      </div>
      <FooterMain />
    </div>
  );
}
