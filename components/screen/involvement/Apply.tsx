import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Locate } from "lucide-react";
import Button from "@/components/base/Button";

const positions = [
  {
    title: "Field Volunteer",
    duration: "2+ weeks",
    location: "Various sites across Africa",
    description:
      "Hands-on tree planting, nursery work, and community engagement",
    buttonColor: "bg-green-700 text-white",
  },
  {
    title: "Technical Specialist",
    duration: "Flexible",
    location: "Remote",
    description:
      "Contribute skills in GIS, data analysis, web development, or design",
    buttonColor: "bg-gray-100 text-green-700",
  },
  {
    title: "Community Liaison",
    duration: "3+ Months",
    location: "Kenya, Uganda, or Ghana",
    description: "Bridge between local communities and project teams",
    buttonColor: "bg-gray-100 text-green-700",
  },
  {
    title: "Research Assistant",
    duration: "6+ Months",
    location: "Remote or on-site",
    description: "Support environmental research and impact assessment",
    buttonColor: "bg-gray-100 text-green-700",
  },
];

const Apply = () => {
  return (
    <div className="bg-pale py-16 w-full">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((pos, idx) => (
            <InfoCard
              key={idx}
              heading={
                <div className="flex justify-between items-center w-full gap-40">
                  <h3 className="text-[var(--primary-dark)]">{pos.title}</h3>
                  <span className="ml-auto inline-block px-3 py-1 text-[var(--secondary-dark)] bg-yellow-50 rounded-full">
                    {pos.duration}
                  </span>
                </div>
              }
              leftAlign={true}
            >
              <div className="flex items-center text-gray-600 text-sm -mt-4">
                <Locate size={14} className="mr-2 text-gray-500" />
                <span className="text-xs">{pos.location}</span>
              </div>
              <p className="text-gray-700 mt-6">{pos.description}</p>
              <Button
                title="Apply Now"
                className={`block ${pos.buttonColor} font-medium py-3 px-6 w-full md:w-fit sm:w-auto rounded text-center mt-4`}
              />
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;
