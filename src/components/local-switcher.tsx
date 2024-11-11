"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition, useState } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "flowbite-react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(localActive);

  const changeLanguage = (newLocale) => {
    setSelectedLanguage(newLocale);
    startTransition(() => {
      router.replace(`/${newLocale}`);
    });
  };

  const languageLabel = selectedLanguage === "en" ? "EN" : "TH";

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
    >
      {/* <p className='sr-only'>change language</p> 
       <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="id">Indonesian</option>
      </select> */}
      <Dropdown.Item onClick={() => changeLanguage("en")} disabled={isPending}>
        English
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage("th")} disabled={isPending}>
        Thai
      </Dropdown.Item>
    </Dropdown>
  );
}
