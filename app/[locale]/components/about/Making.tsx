"use client";

import React from "react";
import logoHero from "@/public/images/Hero Image.svg";
import Image from "next/image";
import fxStrok from "@/public/images/fx-strok.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const Making = () => {
  const t = useTranslations("Making");
  const locale = useLocale();

  return (
    <div
      className={`relative pt-[100px] lg:pt-[200px] w-full flex flex-col items-center justify-center px-4 lg:px-[300px] ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <Image
        src={fxStrok}
        alt={t("imageAlt.stroke")}
        className="absolute hidden lg:block top-32 left-1/2 -translate-x-[70%]"
      />
      <Image
        width={180}
        height={100}
        src={logoHero}
        alt={t("imageAlt.logo")}
        className="z-10 lg:w-[180px] w-[120px]"
      />
      <div>
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px] font-semibold font-cabin leading-[68px]">
          {t("title")}
        </h1>
        <bdi className="text-center block my-4 text-[#5e5959] text-base lg:text-2xl font-normal ">
          {t("description")}
        </bdi>
        <div className="w-full text-center flex items-center justify-center gap-4 my-8">
          <Link
            href={"/contact"}
            className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white "
          >
            {t("contactButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Making;
