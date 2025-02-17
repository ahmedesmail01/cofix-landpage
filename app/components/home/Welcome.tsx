import Image from "next/image";
import React from "react";
import curvedLine from "@/public/images/curved-arrow.svg";

const Welcome = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
      <div>
        <div className="text-center text-[#159861] text-base font-semibold ">
          Hello!
        </div>
        <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold  leading-[68px]">
          Welcome to CorporateFix
          <Image
            src={curvedLine}
            alt="curvedLine"
            className="hidden  lg:block absolute right-0 -bottom-[8px]"
          />
        </div>
      </div>
      <p className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-2xl font-normal  leading-[30px]">
        CorporateFix is your strategic partner in redefining organizational
        success. Through our innovative &quot;Management-Fitness&quot; concept,
        we blend strategic management, categorical regulation logic, and
        corporate governance to transform workplaces into productive, harmonious
        environments
      </p>
      <button className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white ">
        Contact us
      </button>
    </div>
  );
};

export default Welcome;
