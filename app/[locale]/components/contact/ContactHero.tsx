"use client";

import React from "react";
import Image from "next/image";
import logoHero from "@/public/images/Hero Image.svg";
import contactBuilding from "@/public/images/building-contact.svg";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("ContactHero");

  return (
    <div className="relative overflow-hidden w-full bg-[#f5f5f7] flex flex-col items-center justify-center">
      {/* Background Building Image */}
      <Image
        src={contactBuilding}
        alt={t("imageAlt.building")}
        className="top-10 left-1/2 -translate-x-1/2 absolute"
      />

      <div className="flex flex-col items-center justify-center p-4 lg:pt-[300px] pt-[100px] z-10">
        {/* Logo */}
        <Image
          width={180}
          height={100}
          src={logoHero}
          alt={t("imageAlt.logo")}
          className="lg:w-[180px] w-[120px]"
        />

        {/* Title */}
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px] font-semibold font-cabin leading-[68px]">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal lg:max-w-[800px] ">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
