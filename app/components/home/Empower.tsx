import Image from "next/image";
import React from "react";
import empowerImg from "@/public/images/empower-image.svg";

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm">
      <Image
        src={empowerImg}
        alt={title}
        width={400}
        height={250}
        className="w-full h-[200px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 text-[#333]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Empower = () => {
  const services = [
    {
      title: "Management Fitness Programs",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg", // Replace with your actual image path
    },
    {
      title: "Organizational Restructuring",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg",
    },
    {
      title: "Workplace Environment",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg",
    },
    {
      title: "Gap Analysis & Root Cause Solutions",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg",
    },
    {
      title: "Governance Implementation",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg",
    },
    {
      title: "Performance Improvement & Behavioral Development",
      description:
        "We believe in transparency, ethical practices, and honoring our commitments to build trust with clients and partners",
      imageUrl: "/images/team.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4  lg:px-[90px] py-12">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
        <div>
          <div className="text-center text-[#159861] text-base font-semibold">
            Our Services
          </div>
          <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold leading-[68px]">
            Empowering Partners For Business Evolution
          </div>
        </div>
        <p className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-xl font-normal leading-[30px]">
          At CorporateFix, we provide a comprehensive range of services designed
          to elevate your organization&apos;s performance
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <button className="lg:py-4 lg:mt-[48px] py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white ">
        See more
      </button>
    </section>
  );
};

export default Empower;
