"use client";

import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "@/public/images/person1.svg";
import avatar2 from "@/public/images/person2.svg";
import avatar3 from "@/public/images/person3.svg";

// Define interfaces for better type safety
interface TestimonialCardProps {
  content: string;
  name: string;
  position: string;
  imageUrl: StaticImageData;
}

interface Testimonial {
  content: string;
  name: string;
  position: string;
  imageUrl: StaticImageData;
}

const TestimonialCard = ({
  content,
  name,
  position,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg p-6 shadow-sm">
        <p className="text-gray-600 mb-6 text-center">{content}</p>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src={imageUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-gray-600 text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Voices = () => {
  const testimonials: Testimonial[] = [
    {
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      name: "Max Jalson",
      position: "CEO",
      imageUrl: avatar1,
    },
    {
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      name: "Max Jalson",
      position: "CEO",
      imageUrl: avatar2,
    },
    {
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      name: "Max Jalson",
      position: "CEO",
      imageUrl: avatar3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Add this line to remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 lg:px-[90px] py-12">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
        <div>
          <div className="text-center text-[#159861] text-base font-semibold">
            Our Services
          </div>
          <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold leading-[68px]">
            Voices of Success
          </div>
        </div>
        <p className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-xl font-normal leading-[30px]">
          Real Insights, Lasting Impact, Proven Excellence{" "}
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full mt-12">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              position={testimonial.position}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Voices;
