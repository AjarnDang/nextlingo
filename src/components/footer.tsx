"use client";

import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { Footer } from "flowbite-react";

export default function FooterMain() {
  const t = useTranslations("Footer");

  return (
    <Footer container className="bg-transparent border-none shadow-none">
      <Footer.Copyright href="#" by={t("copyright")} />
      <Footer.LinkGroup className="flex gap-6">
        <NavigationLink href="#">{t("term")}</NavigationLink>
        <NavigationLink href="#">{t("cookie")}</NavigationLink>
        <NavigationLink href="#">{t("contact")}</NavigationLink>
      </Footer.LinkGroup>
    </Footer>
  );
}
