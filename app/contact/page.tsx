import React from "react";
import ContactHero from "../components/contact/ContactHero";
import Contacts from "../components/contact/Contacts";
import ContactComp from "../components/home/ContactComp";

const page = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      <ContactHero />
      <Contacts />
      <ContactComp />
    </div>
  );
};

export default page;
