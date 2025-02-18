import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import WhatServices from "../components/services/WhatServices";
import ContactComp from "../components/home/ContactComp";

const page = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      <ServicesHero />
      <WhatServices />
      <ContactComp />
    </div>
  );
};

export default page;
