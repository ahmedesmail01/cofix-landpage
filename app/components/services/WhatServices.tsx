"use client";

import React, { useState } from "react";

interface Service {
  title: string;
  description: string[];
}

const ServiceItem = ({ service }: { service: Service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden "
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`bg-[#0d519d] rounded-full p-2 flex items-center justify-center ml-4 shrink-0 transition-all duration-500 ease-in-out transform ${
                isExpanded
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-95 translate-x-4"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatServices = () => {
  const services: Service[] = [
    {
      title: "Management Fitness Programs",
      description: [
        "Designing and implementing comprehensive performance management systems aligned with organizational goals.",
        "Developing dashboards to monitor results and connect them to strategic objectives.",
      ],
    },
    {
      title: "Organizational Restructuring",
      description: [
        "Designing and implementing comprehensive performance management systems aligned with organizational goals.",
        "Developing dashboards to monitor results and connect them to strategic objectives.",
      ],
    },
    {
      title: "Environment Development",
      description: [
        "Transforming stressful environments into productive and collaboration spaces by establishing clear policies and fostering a positive organizational culture.",
        "Promoting harmony and teamwork among employees.",
      ],
    },
    {
      title: "Gap Analysis & Root Solutions",
      description: [
        "Identifying performance deficiencies using advanced analysis tools.",
        "Providing acyionable solutions to address structural and organizational challenges.",
      ],
    },
    {
      title: "Governance Implementation",
      description: [
        "Establishing automated governance systems to simplify processes and ensure compliance.",
        "Enhancing institutional procedures to achieve quality and sustainabilityy goals.",
      ],
    },
    {
      title: "Performance Improvement & Behavioral Development",
      description: [
        "Developing employee skills through customized training programs.",
        "Implementing tracking systems to ensure measurable progress.",
      ],
    },
    {
      title: "Recruitment Solutions",
      description: [
        "Utilizing advanced tools like Luscher and ESCO tests to select the right talent for the right roles.",
        "Accelerating hiring processes and ensuring role compatibility.",
      ],
    },
    {
      title: "Sales and Logistics Optimization",
      description: [
        "Designing tailored sales strategies to increase revenue.",
        "Improving supply chain operations for enhanced efficiency and reduced costs.",
      ],
    },
    {
      title: "Training and Development",
      description: [
        "In partnership with KHDA, we offer certified training programs and diplomas, including: Self-Development.",
        "Building Successful Relationships.",
        "Advanced Sales Techniques.",
        "Effective Leadership",
        "Gender Communication.",
        "Emotional and Behavioral Regulation.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto lg:px-[120px] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between  gap-10 lg:gap-[150px] mb-16">
          <div className="text-[#0d519d] text-nowrap text-3xl lg:text-[78px] font-bold lg:leading-[100px]">
            What Services
            <br />
            We are offering{" "}
          </div>

          <div className="lg:w-[557px] text-[#5e5959] text-center lg:text-justify text-lg lg:text-2xl font-normal font-['Cabin Condensed']">
            We envision businesses operating as cohesive, high-performing
            entities, driven by innovation, sustainability, and seamless
            integration. Our dream is to empower organizations to achieve their
            goals effortlessly while inspiring their teams and creating lasting
            value
          </div>
        </div>

        <div className=" mx-auto space-y-4">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatServices;
