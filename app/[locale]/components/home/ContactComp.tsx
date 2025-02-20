"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/public/images/avatar-form-contact.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const ContactComp = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full lg:px-[90px] mb-20">
      <div className="min-h-screen rounded-lg bg-white flex flex-col lg:flex-row">
        <div
          className={`w-full lg:w-1/2 p-4 lg:p-8 xl:p-12 ${
            locale === "ar" ? "rtl" : "ltr"
          }`}
        >
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              {t("title")}
            </h2>

            {/* Avatar and Message */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src={avatar}
                alt={t("imageAlt.avatar")}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-sm text-gray-600">{t("greeting")}</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("form.name.placeholder")}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("form.email.placeholder")}
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.phone.label")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("form.phone.placeholder")}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.message.label")}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("form.message.placeholder")}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0d519d] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
              >
                {t("form.submitButton")}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:p-10 p-4 lg:max-w-[750px] h-[550px] lg:h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-map-embed-url"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
