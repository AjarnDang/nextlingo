import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/app/mockData/socials";

export default function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" className="mt-4">
          <Image
            src={item.src}
            width={0}
            height={0}
            className="md:w-16 w-10 md:h-16 h-10 bg-primary md:p-3 p-1 rounded-full"
            alt=""
          />
        </Link>
      ))}
    </div>
  );
}
