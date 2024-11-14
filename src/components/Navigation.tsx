"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  Navbar,
  Dropdown,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Logo from "@/app/assets/logo.png";

export default function Header() {
  const t = useTranslations("Navigation");
  const [scrolled, setScrolled] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleScreenSizeChange = (e) => setIsMediumScreen(e.matches);

    setIsMediumScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleScreenSizeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
  }, []);

  const pathname = usePathname();
  const isAboutPage = pathname === "/en/about" || pathname === "/th/about";

  return (
    <Navbar
      fluid
      rounded
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 sm:justify-center justify-center
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
        ${!scrolled && isMediumScreen ? "bg-white shadow-sm" : ""}
        ${isAboutPage && !scrolled && !isMediumScreen ? "text-slate-50" : ""}
        ${isAboutPage && !scrolled && isMediumScreen ? "text-gray-800" : ""}
      `}
    >
      <NavigationLink href="/home">
        <Image src={Logo} width={50} height={50} alt="DABUZZZZ Logo" className="cursor-pointer" />
      </NavigationLink>

      <div className="flex md:order-2 gap-4">
        <LocalSwitcher />
        <Button className="rounded-full bg-primary lg:flex md:flex hidden px-3">
          {t("book")}
        </Button>
        <NavbarToggle className="md:bg-transparent sm:bg-white bg-white cursor-pointer" />
      </div>

      <NavbarCollapse className="lg:bg-transparent md:bg-transparent sm:bg-white sm:text-center text-center md:leading-none leading-10 bg-white lg:p-0 lg:my-0 md:my-4 my-4 rounded-lg p-2">
        <NavigationLink href="/home">
          <span
            className={`
              ${
                isAboutPage && !scrolled
                  ? isMediumScreen
                    ? "text-gray-800"
                    : "text-slate-50"
                  : "text-gray-800"
              }
             cursor-pointer`}
          >
            {t("home")}
          </span>
        </NavigationLink>
        <NavigationLink href="/service">
          <span
            className={`${
              isAboutPage && !scrolled && !isMediumScreen
                ? "text-slate-50"
                : "text-gray-800"
            } cursor-pointer`}
          >
            {t("service")}
          </span>
        </NavigationLink>
        <NavigationLink href="/gallery">
          <span
            className={`${
              isAboutPage && !scrolled && !isMediumScreen
                ? "text-slate-50"
                : "text-gray-800"
            } cursor-pointer`}
          >
            {t("gallery")}
          </span>
        </NavigationLink>
        <div className="custom-dropdown w-full md:w-auto flex justify-center cursor-pointer">
        <Dropdown
          arrowIcon={true}
          inline
          label={t("about")}
          className="md:w-auto sm:w-full w-full"
        >
          <Dropdown.Item>
            <NavigationLink href="/about">
              <span
                className={`${
                  isAboutPage && !scrolled && !isMediumScreen
                    ? "text-slate-50"
                    : "text-gray-800"
                } cursor-pointer`}
              >
                {t("about")}
              </span>
            </NavigationLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavigationLink href="/testimonials">
              <span
                className={`${
                  isAboutPage && !scrolled && !isMediumScreen
                    ? "text-slate-50"
                    : "text-gray-800"
                } cursor-pointer`}
              >
                {t("testimonials")}
              </span>
            </NavigationLink>
          </Dropdown.Item>
        </Dropdown>
        </div>

        <NavigationLink href="/contact">
          <span
            className={`${
              isAboutPage && !scrolled && !isMediumScreen
                ? "text-slate-50"
                : "text-gray-800"
            } cursor-pointer`}
          >
            {t("contact")}
          </span>
        </NavigationLink>
        <Button className="rounded-full bg-primary lg:hidden md:hidden sm:flex px-3">
          {t("book")}
        </Button>
      </NavbarCollapse>
    </Navbar>
  );
}
