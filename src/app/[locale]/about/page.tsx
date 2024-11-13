import React from "react";
import Image from "next/image";
import HeaderImage from "@/app/assets/Header_Image.png";
import HeroAbout from "@/app/assets/Hero_About_Page.png";
import DabuzzzText from "@/components/DabuzzzText";
import { useTranslations } from "next-intl";
import { Button } from "flowbite-react";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <section className="lg:mb-32">
        <Image
          className="absolute top-0 left-0 -z-10 lg:h-auto md:h-96 min-h-96 object-cover"
          src={HeroAbout}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
          alt="Hero Image"
        />
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-20">
          <div className="lg:col-span-2">
            <Image
              className="rounded-3xl shadow-theme lg:flex hidden"
              src={HeaderImage}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Hero Image"
            />
          </div>
          <div className="flex items-center lg:col-span-3 lg:justify-start lg:text-start sm:justify-center justify-center sm:text-center text-center">
            <div>
              <h1 className="text-2xl mb-4 font-medium text-white uppercase">
                {t('title')} -
              </h1>
              <div className="lg:text-[8rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary">
                <DabuzzzText />
              </div>
              <h1 className="text-5xl mt-8 font-medium text-[#267038] italic">
                Style Studio
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative lg:mt-64 md:mt-24 sm:mt-24 mt-24 mb-16">
        <h1 className="text-xl font-semibold mb-4">{t('title_1')} ?</h1>
        <p className="mb-4">
          Welcome to Dabuzzzz Style Studio, where every cut, color, and style is
          crafted with passion and precision! We are a full-service hair studio
          dedicated to the art of modern barbering and hairstyling, offering a
          personalized experience that combines high-quality techniques with a
          fresh, trendy approach.
        </p>
        <p className="mb-4">
          Our talented team of stylists and barbers are committed to helping you
          look and feel your best. From classic cuts to the latest styles,
          fades, beard grooming, and color treatments, we create looks that suit
          your lifestyle and reflect your personality. At Dabuzzzz, we believe
          that a great hairstyle is more than just a look—it’s confidence,
          expression, and individuality.
        </p>
        <p className="mb-4">
          Located in the heart of the community, Dabuzzzz Style Studio is a
          welcoming space where everyone can feel at home. Our mission is
          simple: to provide exceptional hair care and styling in an environment
          that’s both comfortable and inspiring. We pride ourselves on our
          attention to detail, creativity, and a strong connection with our
          clients, ensuring that every visit to Dabuzzzz leaves you buzzing with
          satisfaction.
        </p>
        <p className="mb-4">
          Step into Dabuzzzz Style Studio and let us bring your vision to life.
        </p>
      </section>

      <section>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4">
          <div className="lg:col-span-1 md:col-span-1 col-auto">
            <div className="lg:mb-16 mb-16">
              <h1 className="text-xl font-semibold mb-4 uppercase">
                WHERE WE ARE ?
              </h1>
              <i>Klangsadan, Around Bueng Nong Wang.</i>
              <p>
                135/42, Moo 14, Nai Muang, Muang Khon Kaen, Khon Kaen, Thailand,
                40000
              </p>
            </div>
            <div className="lg:mb-0 mb-12">
              <h1 className="text-xl font-semibold mb-4 uppercase">
                OPERATING HOUR
              </h1>
              <p>MON to SUN</p>
              <p className="mb-4">at 10:00 - 19:00</p>
              <Button className="rounded-full bg-primary px-4">
                {t("book")}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-1 col-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.3502649129787!2d102.82685467473935!3d16.45779258427942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bc495fbe2f3%3A0x3c532946901ddbb2!2sDABUZZZZ!5e0!3m2!1sth!2sth!4v1731492729381!5m2!1sth!2sth"
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "1rem" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
