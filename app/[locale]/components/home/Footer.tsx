import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const socialLinks = [
    { name: t("social.facebook"), href: "#", icon: FaFacebookF },
    { name: t("social.twitter"), href: "#", icon: RiTwitterXFill },
    { name: t("social.linkedin"), href: "#", icon: FaLinkedinIn },
    { name: t("social.instagram"), href: "#", icon: FaInstagram },
  ];

  return (
    <footer
      className={`bg-[#E8F3FF] z-20 px-4 lg:px-[90px] py-12 ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt={t("logoAlt")}
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 max-w-[300px]">
              {t("description")}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-black rounded-full mx-4 flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="text-white text-lg" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.services.title")}
            </h3>
            <ul className="space-y-2">
              {t.raw("sections.services.items").map((service: string) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.sectors.title")}
            </h3>
            <ul className="space-y-2">
              {t.raw("sections.sectors.items").map((sector: string) => (
                <li key={sector}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {sector}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("sections.resources.title")}
            </h3>
            <ul className="space-y-2">
              {t.raw("sections.resources.items").map((resource: string) => (
                <li key={resource}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600  hover:text-gray-900"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            {t("bottom.copyright")}
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {t("bottom.privacy")}
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {t("bottom.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
