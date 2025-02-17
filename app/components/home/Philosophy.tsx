import React from "react";

const Philosophy = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 lg:px-[90px] py-8 lg:py-12">
      <div className="max-w-[1114px] text-center">
        <p className="text-2xl md:text-4xl lg:text-[56px] font-semibold font-['Cabin Condensed'] leading-tight lg:leading-[68px]">
          <span className="text-[#5c5c5c]">Our </span>
          <span className="text-[#0d519d]">Philosophy</span>
          <span className="text-[#5c5c5c]">
            {" "}
            We believe in fostering partnerships built on{" "}
          </span>
          <span className="text-[#0d519d]">integrity</span>
          <span className="text-[#5c5c5c]"> and </span>
          <span className="text-[#0d519d]">trust</span>
          <span className="text-[#5c5c5c]">, </span>
          <span className="text-[#0d519d]">working collaboratively</span>
          <span className="text-[#5c5c5c]">
            {" "}
            to achieve shared success through innovative solutions
          </span>
        </p>
      </div>
      <button className="lg:py-4 my-8 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white ">
        Contact us
      </button>
    </section>
  );
};

export default Philosophy;
