"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
import logo from "@/public/images/logo.svg";
// import searchIcon from "@/public/images/search-icon.svg";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const items = [
    { label: t("home"), link: "/" },
    { label: t("about"), link: "/about" },
    { label: t("services"), link: "/services" },
    { label: t("contact"), link: "/contact" },
  ];

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className="
      fixed top-0 left-0 w-full 
      bg-white/30 
      backdrop-blur-md 
      border-b border-white/20
      z-30
    "
    >
      <div className="flex items-center justify-between px-4 py-1 lg:py-3 lg:px-[120px]">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt={t("logoAlt")}
            width={80}
            height={80}
            className="lg:w-[80px] w-[40px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between px-[120px] pb-2">
          <ul className="flex gap-4 items-center">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:underline hover:text-blue-600 ${
                  pathname === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher Button */}
          <button
            onClick={handleLanguageChange}
            className="px-3 hidden  lg:block py-1 rounded-md bg-[#0D519D] text-white hover:bg-blue-700 transition-colors"
          >
            {locale === "en" ? "عربي" : "English"}
          </button>

          {/* Search Icon (Desktop only) */}
          {/* <div className="hidden lg:block">
            <Image src={searchIcon} alt={t("searchAlt")} />
          </div> */}

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("toggleMenu")}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
                  pathname === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Language Switcher in Mobile Menu */}
            <li>
              <button
                onClick={handleLanguageChange}
                className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {locale === "en" ? "عربي" : "English"}
              </button>
            </li>

            {/* Search Icon in mobile menu */}
            {/* <li className="mt-2">
              <Image
                src={searchIcon}
                alt={t("searchAlt")}
                className="inline-block"
              />
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
