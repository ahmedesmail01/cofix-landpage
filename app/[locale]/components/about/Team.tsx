import React from "react";
import Image from "next/image";
import Link from "next/link";
import team1 from "@/public/images/team1.svg";
import team2 from "@/public/images/team2.svg";
import team3 from "@/public/images/team3.svg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-xl bg-white items-center ${
        member.id === 1 || member.id === 3 ? "lg:relative lg:top-20" : ""
      }`}
    >
      <div className="relative w-[280px] h-[380px] mb-4 overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold ">{member.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{member.role}</p>
      <p className="text-sm text-gray-500 mb-3">{member.position}</p>
      <div className="flex gap-3">
        {member.socialLinks.linkedin && (
          <Link
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#545454] p-1.5 rounded"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        )}
        {member.socialLinks.twitter && (
          <Link
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#545454] p-1.5 rounded"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
        )}
        {member.socialLinks.instagram && (
          <Link
            href={member.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#545454] p-1.5 rounded"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jack Karo",
      role: "CEO & Co-Founder",
      position: "Senior Technical Supervisor",
      image: team1, // Replace with your image path
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 2,
      name: "Jack Karo",
      role: "CEO & Co-Founder",
      position: "Senior Technical Supervisor",
      image: team2, // Replace with your image path
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Jack Karo",
      role: "CEO & Co-Founder",
      position: "Senior Technical Supervisor",
      image: team3, // Replace with your image path
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0d519d] text-4xl font-bold mb-4">
            Meet Our team
          </h2>
          <p className="text-gray-600">
            Rooted in Integrity, Driven by Collaboration,
            <br />
            Guided by Excellence
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
