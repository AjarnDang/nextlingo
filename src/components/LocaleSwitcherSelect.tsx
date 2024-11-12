"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { useTransition, ReactNode, ChangeEvent } from "react";
// import { GlobalOutlined } from "@ant-design/icons";
// import { Dropdown } from "flowbite-react";

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

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        { pathname, params }, 
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={isPending && "transition-opacity [&:disabled]:opacity-30"}
    >
      <p className="sr-only">{label}</p>
      <select
        name=""
        id=""
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        { children }
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]"></span>
    </label>
  );
}
