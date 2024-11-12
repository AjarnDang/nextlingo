import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

import Image from "next/image";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import Logo from "@/app/assets/logo.png";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <Navbar fluid rounded className="bg-transparent fixed top-0 left-0 w-full z-50">
      <NavigationLink href="/">
        <Image src={Logo} width={50} height={50} alt="DABUZZZZ Logo" />
      </NavigationLink>

      <NavbarCollapse>
        <NavigationLink href="/">{t("home")}</NavigationLink>
        <NavigationLink href="/service">{t("service")}</NavigationLink>
        <NavigationLink href="/gallery">{t("gallery")}</NavigationLink>
        <NavigationLink href="/about">{t("about")}</NavigationLink>
        <NavigationLink href="/contact">{t("contact")}</NavigationLink>
      </NavbarCollapse>

      <div className="flex md:order-2 gap-4">
        <LocalSwitcher />
        <Button className="rounded-full bg-primary px-3">{t("book")}</Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
