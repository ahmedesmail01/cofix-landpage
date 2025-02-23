"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/public/images/avatar-form-contact.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";

// Define Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mail: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().max(2000).optional(),
});

// Define TypeScript type for form data
type ContactFormData = z.infer<typeof contactSchema>;

const ContactComp = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Submitting form:", data);

      const response = await axios.post(
        // `${process.env.NEXT_PUBLIC_BASE_URL}`,
        "https://corporatefix.net/backend/api/websiteLead",
        data
      );
      console.log("Form submitted successfully:", response.data);
      Swal.fire({
        title: "Good job!",
        text: "success!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  {...register("name")}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder={t("form.name.placeholder")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
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
                  {...register("mail")}
                  className={`w-full px-4 py-2 border ${
                    errors.mail ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.mail ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder={t("form.email.placeholder")}
                />
                {errors.mail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mail.message}
                  </p>
                )}
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
                  {...register("phone")}
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
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder={t("form.message.placeholder")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0d519d] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : t("form.submitButton")}
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
