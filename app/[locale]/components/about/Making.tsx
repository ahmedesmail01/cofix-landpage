import React from "react";
import logoHero from "@/public/images/Hero Image.svg";
import Image from "next/image";
import fxStrok from "@/public/images/fx-strok.svg";

const Making = () => {
  return (
    <div className="relative pt-[100px] lg:pt-[200px] w-full  flex flex-col items-center justify-center px-4 lg:px-[300px]">
      <Image
        src={fxStrok}
        alt="stroke"
        className="absolute hidden lg:block top-32 left-1/2 -translate-x-[70%]"
      />
      <Image
        width={180}
        height={100}
        src={logoHero}
        alt="logo"
        className=" z-10 lg:w-[180px] w-[120px]   "
      />
      <div>
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px]  font-semibold font-cabin leading-[68px]">
          Making Your Dream Come True
        </h1>
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal font-['Cabin Condensed']">
          Since our establishment in 2010, CorporateFix has been a trusted name
          in consultancy and training. We specialize in developing tailored
          organizational frameworks and delivering solutions that help
          businesses thrive in competitive markets
        </p>
        <div className="w-full text-center flex items-center justify-center gap-4 my-8">
          <button className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Making;
