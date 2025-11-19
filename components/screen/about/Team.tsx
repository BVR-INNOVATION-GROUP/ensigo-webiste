import React from "react";
import TeamCard, { TeamCardI } from "./TeamCard";

const Team = () => {
  const members: TeamCardI[] = [
    {
      photo:
        require("@/public/profiles/agaba.png"),
      name: "Mulumba Agaba",
      title: "Co-Founder – Biodiversity and Ecosystem Services",
      // bio: "Environmental scientist with 15+ years experience in sustainable development.",
    },
    {
      photo:
        require("@/public/profiles/brian.png")
      ,
      name: "Brian Ndyaguma",
      title: "Co-Founder, Innovation and Technology",
      // bio: "Tech innovator specializing in blockchain and environmental monitoring systems.",
    },
    {
      photo:
        require("@/public/profiles/joy.png"),
      name: "Joy Mirembe Ssenfuma",
      title: "Co-Founder – Carbon Investments and Finance",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-5 bg-secondary h-10" />
        <div className="h-[40px] flex items-center px-6 w-fit sm:w-[12vw] [clip-path:polygon(0%_0%,80%_0%,100%_100%,0%_100%)] bg-primary text-white text-sm sm:text-base font-medium">
          Meet Our Team
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
};

export default Team;
