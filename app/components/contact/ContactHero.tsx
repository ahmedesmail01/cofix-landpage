import React from "react";
// import Building from "../Building";
import logoHero from "@/public/images/Hero Image.svg";
import Image from "next/image";
import contactBuilding from "@/public/images/building-contact.svg";

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden w-full bg-[#f5f5f7] flex flex-col items-center justify-center">
      {/* <Building /> */}
      <Image
        src={contactBuilding}
        alt="building"
        className="top-10 left-1/2 -translate-x-1/2 absolute "
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
          Contact Us
        </h1>
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal font-['Cabin Condensed']">
          We provide you With a lot of channels and service that we provide that{" "}
          <br />
          can Assist your business to Grow and thrive .. Are You Ready For
          Innovation
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
