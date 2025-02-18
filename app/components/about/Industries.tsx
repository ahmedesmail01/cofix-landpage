import React from "react";
import Image from "next/image";
import constructionIcon from "@/public/images/Construction.svg";
import pharmaceuticalsIcon from "@/public/images/Pharmaceuticals.svg";
import educationIcon from "@/public/images/Education.svg";
import manufacturingIcon from "@/public/images/Manufacturing.svg";
import medicalIcon from "@/public/images/Medical Equipment.svg";
import serviceIcon from "@/public/images/Service Providers.svg";
import { Store } from "lucide-react";

interface IndustryCard {
  icon: string;
  title: string;
}

const IndustryCard = ({ icon, title }: IndustryCard) => {
  return (
    <div className="bg-white  p-8 rounded-lg shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md">
      <div className="w-16 h-16 mb-4 relative">
        <div className="absolute inset-0  rounded-full flex items-center justify-center">
          {title === "Retail" ? (
            <div className="flex items-center justify-center p-6 rounded-full bg-[#e8f3ff]">
              {icon}
            </div>
          ) : (
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="w-16 h-16 text-[#0d519d]"
            />
          )}
        </div>
      </div>
      <h3 className="text-center text-gray-800 font-medium">{title}</h3>
    </div>
  );
};

const Industries = () => {
  const industries: IndustryCard[] = [
    {
      icon: constructionIcon,
      title: "Construction",
    },
    {
      icon: pharmaceuticalsIcon,
      title: "Pharmaceuticals",
    },
    {
      icon: educationIcon,
      title: "Education",
    },
    {
      icon: <Store className=" text-[#0d519d]" />,
      title: "Retail",
    },
    {
      icon: manufacturingIcon,
      title: "Manufacturing",
    },
    {
      icon: medicalIcon,
      title: "Medical Equipment",
    },
    {
      icon: serviceIcon,
      title: "Service Providers",
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-2">Our Services</p>
          <h2 className="text-[#0d519d] text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CorporateFix has extensive experience serving a diverse range of
            industries, including
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
