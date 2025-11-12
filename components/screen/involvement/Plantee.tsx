"use client";
import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Trees, Leaf, MapPin, Sun, Users, Handshake } from "lucide-react";
import { useRouter } from "next/navigation";

const Plantee = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  const iconWrapper = (icon: React.ReactNode) => (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--background)]">
      {icon}
    </div>
  );

  const iconProps = "text-green-700 w-6 h-6";

  const cards = [
    {
      heading: "Plant Trees",
      description: "Sponsor tree planting in specific regions or adopt a forest plot.",
      icon: <Trees className={iconProps} />,
      buttonText: "Start Planning",
      list: ["One-time donation", "Monthly sponsorship", "Corporate tree planting"],
    },
    {
      heading: "Support Forest Restoration",
      description: "Help restore degraded forest areas and increase biodiversity.",
      icon: <Leaf className={iconProps} />,
      buttonText: "Join Us",
      list: ["Tree nursery funding", "Community forest support", "Habitat restoration"],
    },
    {
      heading: "Adopt a Forest Plot",
      description: "Take ownership of a specific forest area and track your impact.",
      icon: <MapPin className={iconProps} />,
      buttonText: "Become a Partner",
      list: ["1-acre adoption", "5-acre adoption", "Corporate adoption"],
    },
    {
      heading: "Climate Action Sponsorship",
      description: "Join our climate sponsorship programs to offset emissions.",
      icon: <Sun className={iconProps} />,
      buttonText: "Learn More",
      list: ["Carbon offset packages", "Tree-based carbon credits", "Corporate sustainability plans"],
    },
    {
      heading: "Community Engagement",
      description: "Empower local communities through education and tree planting.",
      icon: <Users className={iconProps} />,
      buttonText: "Get Started",
      list: ["Volunteer with us", "Educational workshops", "Community forest days"],
    },
    {
      heading: "Corporate Partnerships",
      description: "Collaborate with us on large-scale reforestation and CSR programs.",
      icon: <Handshake className={iconProps} />,
      buttonText: "Donate Now",
      list: ["CSR collaboration", "Tree-planting events", "Impact reporting"],
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              heading={card.heading}
              description={card.description}
              icon={iconWrapper(card.icon)}
              buttonText={card.buttonText}
              onButtonClick={handleNavigate}
              leftAlign={true}
            >
              <ul className="list-disc pl-6 space-y-1">
                {card.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plantee;
