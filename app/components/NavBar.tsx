import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";
import searchIcon from "@/public/images/search-icon.svg";
import Link from "next/link";

const NavBar = () => {
  const items = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About us",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Contact us",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full flex items-center justify-between px-4 py-4 lg:px-10 bg-white ">
      {/* logo */}

      <Image src={logo} alt="logo" />
      {/* links */}
      <ul className="flex gap-4 items-center ">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:underline hover:text-blue-600"
          >
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Search */}
      <Image src={searchIcon} alt="searc" />
    </div>
  );
};

export default NavBar;
