"use client";

import React from "react";
import Image from "next/image";
import constructionIcon from "@/public/images/Construction.svg";
import pharmaceuticalsIcon from "@/public/images/Pharmaceuticals.svg";
import educationIcon from "@/public/images/Education.svg";
import manufacturingIcon from "@/public/images/Manufacturing.svg";
import medicalIcon from "@/public/images/Medical Equipment.svg";
import serviceIcon from "@/public/images/Service Providers.svg";
import storeIcon from "@/public/images/storeIcon.svg";
import { useTranslations } from "next-intl";

// Define the icons object with proper types
const icons = {
  constructionIcon,
  pharmaceuticalsIcon,
  educationIcon,
  manufacturingIcon,
  medicalIcon,
  serviceIcon,
  storeIcon,
};

type IconKey = keyof typeof icons; // Restrict to keys of the `icons` object

interface Industry {
  title: string;
  icon: string | React.ReactNode;
}

interface IndustryData {
  title: string;
  icon: IconKey; // Use IconKey to ensure type safety
}

const IndustryCard = ({ icon, title }: Industry) => {
  return (
    <div className="bg-white w-full h-[200px] lg:w-[218px] p-8 rounded-lg shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
      <div className="w-16 h-16 mb-4 relative">
        <div className="absolute inset-0 rounded-full flex items-center justify-center">
          <Image
            src={icon as string}
            alt={title}
            width={32}
            height={32}
            className="w-16 h-16 text-[#0d519d]"
          />
        </div>
      </div>
      <h3 className="text-center text-gray-800 font-medium">{title}</h3>
    </div>
  );
};

const Industries = () => {
  const t = useTranslations("Industries");

  // Explicitly type the industries array
  const industries: Industry[] = t
    .raw("industries")
    .map((industry: IndustryData) => ({
      ...industry,
      icon: icons[industry.icon], // Use IconKey to ensure type safety
    }));

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">{t("header.subtitle")}</p>
          <h2 className="text-[#0d519d] text-4xl font-bold mb-4">
            {t("header.title")}
          </h2>
          <div className="lg:w-[400px] w-full mx-auto">
            <bdi className="text-gray-600 w-full mx-auto">
              {t("header.description")}
            </bdi>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center  gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
