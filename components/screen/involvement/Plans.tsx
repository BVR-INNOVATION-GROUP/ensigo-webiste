import React from "react";
import InfoCard from "@/components/base/InfoCard";
import SectionHeader from "@/components/base/SectionHeader";

const Plans = () => {
  const plans = [
    {
      name: "Seedling Supporter",
      price: "$25/",
      month: "month",
      impact: "Plants 50 trees annually",
      perks: [
        "Monthly updates",
        "Digital certificate",
        "Impact dashboard access",
      ],
      buttonStyle: "bg-gray-100 text-green-700",
      badge: null,
    },
    {
      name: "Forest Guardian",
      price: "$100/",
      month: "month",
      impact: "Plants 200 trees + supports 1 community member",
      perks: [
        "Quarterly video updates",
        "GPS coordinates of your forest",
        "Invitation to virtual events",
      ],
      buttonStyle: "bg-green-700 text-white",
      badge: "Popular",
    },
    {
      name: "Ecosystem Champion",
      price: "$500/",
      month: "month",
      impact: "Plants 1,000 trees + employs 5 community members",
      perks: [
        "Personal impact reports",
        "Site visit opportunity",
        "Recognition on website",
      ],
      buttonStyle: "bg-gray-100 text-green-700",
      badge: null,
    },
  ];

  return (
    <div className="bg-[var(--very-dark-background)] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <SectionHeader
            heading="Monthly Support Programs"
            caption="Sustainable impact through recurring contributions"
            leftAlign={false}
            className="mb-4"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <InfoCard
              key={index}
              leftAlign={true}
              className="relative rounded flex flex-col"
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-0 right-0 bg-primary text-[var(--background)] px-3 py-1 rounded-bl-md">
                  {plan.badge}
                </span>
              )}

              {/* Plan Details */}
              <div className="flex flex-col gap-2 mt-2 flex-grow">
                <span className="text-gray-500 mb-5">{plan.name}</span>
                <span className="text-primary text-xl font-bold">{plan.price}<span className="text-primary">{plan.month}</span></span>
                <span className="font-sans min-h-[3rem] text-dark font-bold">
                  {plan.impact}
                </span>
                <ul className="list-disc pl-5 space-y-1 mt-2 text-black/60">
                  {plan.perks.map((perk, i) => (
                    <li key={i}>{perk}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`mt-4 ${plan.buttonStyle} font-medium py-3 px-6 rounded w-full text-center hover:opacity-90 transition mt-10`}
              >
                Choose Plan
              </button>
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
