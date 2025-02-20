"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import fxStrok from "@/public/images/fx-strok.svg";
import { useTranslations } from "next-intl";

const Contacts = () => {
  const t = useTranslations("Contacts");

  const socialLinks = t.raw("socialLinks");

  return (
    <section className="relative bg-gray-50 w-full py-16">
      <div className="container mx-auto px-4 lg:px-[120px]">
        <div className="grid grid-cols-1 w-full gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("contactTitle")}</h2>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600">{t("phone")}</span>
            </div>

            {/* Email */}
            <div className="mb-4">
              <p className="text-gray-600">
                {t("email.label")}{" "}
                <a
                  href={`mailto:${t("email.value")}`}
                  className="text-[#0d519d] hover:underline"
                >
                  {t("email.value")}
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="mb-8">
              <p className="text-gray-600">
                {t("location.label")} {t("location.value")}
              </p>
            </div>
          </div>

          {/* Based In */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("basedInTitle")}</h2>
            <div className="mb-8">
              {t.raw("basedIn").map((line: string, index: number) => (
                <p key={index} className="text-gray-600">
                  {line}
                </p>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(
                (social: { name: string; url: string }, index: number) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0d519d] p-2 rounded-full text-white hover:bg-[#0d519d]/90 transition-colors duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    {index === 0 && (
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={fxStrok}
        width={200}
        alt={t("imageAlt.strok")}
        className="absolute hidden lg:block top-10 right-60"
      />
    </section>
  );
};

export default Contacts;
