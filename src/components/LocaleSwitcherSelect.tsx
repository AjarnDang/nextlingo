"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { useTransition, ReactNode, ChangeEvent } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "flowbite-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  const languageLabel = currentLocale === "en" ? "EN" : "TH";

  return (
    <Dropdown
      inline
      arrowIcon={false}
      label={
        <div className="flex items-center">
          <GlobalOutlined />
          <span className="ml-2">{languageLabel}</span>
        </div>
      }
      disabled={isPending}
    >
      <Dropdown.Item onClick={() => onSelectChange("en")} disabled={isPending}>
        English
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onSelectChange("th")} disabled={isPending}>
        Thai
      </Dropdown.Item>
    </Dropdown>
  );
}
