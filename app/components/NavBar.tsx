"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.svg";
import searchIcon from "@/public/images/search-icon.svg";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const items = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact us", link: "/contact" },
  ];

  return (
    // 1) Add translucent background + backdrop blur to the header
    <header
      className="
      fixed top-0 left-0 w-full z-10 
      bg-white/30 
      backdrop-blur-md 
      border-b border-white/20
    "
    >
      <div className="flex items-center justify-between px-4 py-1 lg:py-3 lg:px-[120px]">
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="lg:w-[80px] w-[40px]"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between px-[120px] pb-2">
          <ul className="flex gap-4 items-center">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:underline hover:text-blue-600 ${
                  path === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Icon (Desktop only) */}
        <div className="hidden lg:block">
          <Image src={searchIcon} alt="search" />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="
            lg:hidden 
            bg-white/30 
            backdrop-blur-md 
            shadow-md
          "
        >
          <ul className="flex flex-col px-4 py-4 space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:underline hover:text-blue-600 ${
                  path === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Search Icon in mobile menu */}
            <li className="mt-2">
              <Image src={searchIcon} alt="search" className="inline-block" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
