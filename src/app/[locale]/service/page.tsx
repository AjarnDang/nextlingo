import React from "react";
import Image from "next/image";
import DabuzzzText from "@/components/DabuzzzText";
import HeroService from "@/app/assets/Hero_Service_Page.png";
import { useTranslations } from "next-intl";

export default function Service() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <div className="relative">
        <section className="lg:mb-16 mb-10">
          <Image
            src={HeroService}
            width={0}
            height={0}
            className="w-full lg:h-auto min-h-72 object-cover object-center rounded-3xl"
            alt="Hero Service Image"
          />
        </section>
        <section className="lg:mb-16 mb-10 text-center flex justify-center w-full">
          <div>
            <h1 className="lg:text-[6rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary xl:flex lg:block block justify-center font-bold italic items-end">
              <DabuzzzText />
              <div className="xl:flex lg:block md:hidden hidden">
                ’s Services
              </div>
            </h1>
            <i className="lg:hidden md:block block text-primary opacity-50 font-medium text-4xl">
              Services
            </i>
            <p className="mt-4 lg:mx-24">
              At Dabuzzzz Style Studio, we offer a full range of barber services
              tailored to every style and need. From precision men’s haircuts
              and signature hair setups to bold hair coloring for a fresh look,
              our team is here to deliver a top-notch experience. Plus, enjoy
              the convenience of on-site car parking, making your visit easy and
              stress-free. Step in, relax, and leave with a style that’s
              uniquely you!
            </p>
          </div>
        </section>
      </div>
      <div className="absolute bg-[#E4F5E9] left-0 lg:px-60 px-4">
        <section>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <h1>Hair Styles</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
