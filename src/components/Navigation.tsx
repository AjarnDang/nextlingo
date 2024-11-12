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
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image src={Logo} width={50} height={50} alt="DABUZZZZ Logo" />
      </NavbarBrand>

      <NavbarCollapse>
        <NavigationLink href="/">{t("home")}</NavigationLink>
        <NavigationLink href="/service">{t("service")}</NavigationLink>
        <NavigationLink href="#">{t("gallery")}</NavigationLink>
        <NavigationLink href="#">{t("about")}</NavigationLink>
        <NavigationLink href="#">{t("contact")}</NavigationLink>
      </NavbarCollapse>

      <div className="flex md:order-2 gap-4">
        <LocalSwitcher />
        <Button className="rounded-full">{t("book")}</Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
