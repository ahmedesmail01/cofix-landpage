// import Image from "next/image";
import React from "react";
// import curvedLine from "@/public/images/curved-arrow.svg";

const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="w-8 h-8 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Partner = () => {
  const values = [
    {
      title: "Honesty & Integrity",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
    },
    {
      title: "Innovation & Improvement",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
    },
    {
      title: "Sustainability & Governance",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
    },
    {
      title: "Professional & Personal Empowerment",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
    },
  ];

  return (
    <section className="w-full lg:px-[90px]">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
        <div>
          <div className="text-center text-[#159861] text-base font-semibold">
            Our Values
          </div>
          <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold leading-[68px]">
            partner with lasting trust
            {/* <Image
              src={curvedLine}
              alt="curvedLine"
              className="hidden lg:block absolute right-0 w-[200px] -bottom-[8px]"
            /> */}
          </div>
        </div>
        <p className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-xl font-normal leading-[30px]">
          Rooted in Integrity, Driven by Collaboration, Guided by Excellence{" "}
        </p>
      </div>

      {/* Values Grid Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
