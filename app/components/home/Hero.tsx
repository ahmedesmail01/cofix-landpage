import React from "react";
import Building from "../Building";
import logoHero from "@/public/images/Hero Image.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#f5f5f7] flex flex-col items-center justify-center">
      <div className="absolute hidden lg:block w-full h-[200px] top-[40%] left-0 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7] to-transparent" />
      <Building />
      <Image
        width={180}
        height={100}
        src={logoHero}
        alt="logo"
        className="absolute lg:w-[180px] w-[120px] top-[40%] lg:top-[60%] left-1/2  -translate-x-1/2 -translate-y-1/2"
      />
      <div>
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px]  font-semibold font-cabin leading-[68px]">
          Strategic Partner, for Lasting Growth
        </h1>
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal font-['Cabin Condensed']">
          Your most Trusted Partner for Evolving. <br /> Experience, Expertise,
          Efficiency
        </p>
        <div className="w-full text-center flex items-center justify-center gap-4 my-8">
          <button className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white ">
            Contact us
          </button>
          <button className="lg:py-4 py-2 lg:px-8 px-4  border-2 border-[#0e529b]  rounded-xl lg:text-xl text-[#0e529b] ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
