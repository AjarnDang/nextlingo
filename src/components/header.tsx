import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";
import {
  Button,
  NavbarLink,
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
        <NavbarLink href="/" active>
          {t("home")}
        </NavbarLink>
        <NavbarLink href="#">{t("service")}</NavbarLink>
        <NavbarLink href="#">{t("gallery")}</NavbarLink>
        <NavbarLink href="#">{t("about")}</NavbarLink>
        <NavbarLink href="#">{t("contact")}</NavbarLink>
      </NavbarCollapse>

      <div className="flex md:order-2 gap-4">
        <LocalSwitcher />
        <Button className="rounded-full">{t("book")}</Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
