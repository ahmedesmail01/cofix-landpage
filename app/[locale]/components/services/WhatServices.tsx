"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface Service {
  title: string;
  description: string[];
}

const ServiceItem = ({ service }: { service: Service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-6 transition-all duration-500 ease-in-out">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
          <h3 className="text-xl text-gray-500 font-bold lg:w-1/3 w-full transition-all duration-500 ease-in-out">
            {service.title}
          </h3>

          <div className="flex-1 flex justify-between items-start w-full">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isExpanded
                  ? "opacity-100 max-h-[500px]"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <ul className="list-disc text-gray-600 space-y-2 pl-4">
                {service.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg font-semibold transition-all duration-500 ease-in-out"
                  >
                    <bdi>{item}</bdi>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatServices = () => {
  const t = useTranslations("WhatServices");

  const services: Service[] = t.raw("services");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto lg:px-[120px] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[80px] mb-16">
          <div className="text-[#0d519d]  text-3xl lg:text-[80px] font-bold lg:leading-[100px]">
            {t("header.title")}
          </div>

          <div className="lg:w-[900px] text-[#5e5959] text-center lg:text-justify text-lg lg:text-2xl font-normal font-['Cabin Condensed']">
            {t("header.description")}
          </div>
        </div>

        <div className="mx-auto space-y-4">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatServices;
