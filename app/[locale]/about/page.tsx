import React from "react";
import Making from "../components/about/Making";
import Belief from "../components/about/Belief";
import Team from "../components/about/Team";
// import Voices from "../components/home/Voices";
import Industries from "../components/about/Industries";
import ContactComp from "../components/home/ContactComp";

const page = () => {
  return (
    <div className="flex overflow-hidden relative flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      <div className="blue_circle hidden lg:block absolute top-[300px] -left-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[1000px] -right-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[3000px] -left-[300px] -z-10" />
      <Making />
      <Belief />
      <Team />
      {/* <Voices /> */}
      <Industries />
      <ContactComp />
    </div>
  );
};

export default page;
