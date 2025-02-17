import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri"; // Import X icon

const Footer = () => {
  const services = [
    "Management Fitness Programs",
    "Organizational Restructuring",
    "Workplace Environment",
    "Gap Analysis & Root",
    "Governance Implementation",
    "Performance Improvement",
    "Recruitment Solutions",
    "Sales and LogisticsOptimization",
    "Training and Development",
  ];

  const sectors = [
    "Construction",
    "Pharmaceuticals",
    "Education",
    "Retail",
    "Manufacturing",
    "Medical Equipment",
    "Service Providers",
  ];

  const resources = ["Videos", "Legal Resources", "FAQs"];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "Twitter", href: "#", icon: RiTwitterXFill },
    { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { name: "Instagram", href: "#", icon: FaInstagram },
  ];

  return (
    <footer className="bg-[#E8F3FF] px-4 lg:px-[90px] py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt="CorporateFix Logo"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 max-w-[300px]">
              CorporateFix is your strategic partner in redefining
              organizational success. Through our innovative
              &quot;Management-Fitness&quot; concept, we blend strategic
              management, categorical regulation logic, and corporate governance
              to transform workplace into productive, harmonious environments
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="text-white text-lg" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
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
            <h3 className="text-lg font-semibold mb-4">Sectors</h3>
            <ul className="space-y-2">
              {sectors.map((sector) => (
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
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
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
            Powered by Roma MPH, all copy right reserved
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
