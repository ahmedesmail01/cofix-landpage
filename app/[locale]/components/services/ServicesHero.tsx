import React from "react";
// import Building from "../Building";
import logoHero from "@/public/images/Hero Image.svg";
import Image from "next/image";
import servicesBuilding from "@/public/images/building-services.svg";

const ServicesHero = () => {
  return (
    <div className="relative overflow-hidden w-full bg-[#f5f5f7] flex flex-col items-center justify-center">
      {/* <Building /> */}
      <Image
        src={servicesBuilding}
        alt="building"
        className="top-0 left-0 absolute"
      />

      <div className="flex flex-col items-center justify-center p-4 lg:pt-[500px] pt-[100px] z-10">
        <Image
          width={180}
          height={100}
          src={logoHero}
          alt="logo"
          className=" lg:w-[180px] w-[120px] "
        />
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px]  font-semibold font-cabin leading-[68px]">
          This Is How We Can Help You
        </h1>
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal font-['Cabin Condensed']">
          We provide you With a lot of channels and service that we provide that{" "}
          <br />
          can Assist your business to Grow and thrive .. Are You Ready For
          Innovation
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

export default ServicesHero;
