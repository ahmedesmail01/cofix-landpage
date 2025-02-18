import React from "react";
import Making from "../components/about/Making";
import Belief from "../components/about/Belief";
import Team from "../components/about/Team";
import Voices from "../components/home/Voices";
import Industries from "../components/about/Industries";

const page = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      <Making />
      <Belief />
      <Team />
      <Voices />
      <Industries />
    </div>
  );
};

export default page;
