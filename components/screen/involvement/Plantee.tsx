import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Trees, Leaf, MapPin, Sun, Users, Handshake } from "lucide-react";

const Plantee = () => {
  const iconWrapper = (icon: React.ReactNode) => (
    <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full">
      {icon}
    </div>
  );

  const iconProps = "text-green-700 w-6 h-6";

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">

          <InfoCard
            heading="Plant Trees"
            description="Sponsor tree planting in specific regions or adopt a forest plot."
            icon={iconWrapper(<Trees className={iconProps} />)}
            buttonText="Start Planning"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>One-time donation</li>
              <li>Monthly sponsorship</li>
              <li>Corporate tree planting</li>
            </ul>
          </InfoCard>

          <InfoCard
            heading="Support Forest Restoration"
            description="Help restore degraded forest areas and increase biodiversity."
            icon={iconWrapper(<Leaf className={iconProps} />)}
            buttonText="Join Us"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Tree nursery funding</li>
              <li>Community forest support</li>
              <li>Habitat restoration</li>
            </ul>
          </InfoCard>

          <InfoCard
            heading="Adopt a Forest Plot"
            description="Take ownership of a specific forest area and track your impact."
            icon={iconWrapper(<MapPin className={iconProps} />)}
            buttonText="Become a Partner"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>1-acre adoption</li>
              <li>5-acre adoption</li>
              <li>Corporate adoption</li>
            </ul>
          </InfoCard>

          <InfoCard
            heading="Climate Action Sponsorship"
            description="Join our climate sponsorship programs to offset emissions."
            icon={iconWrapper(<Sun className={iconProps} />)}
            buttonText="Learn More"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Carbon offset packages</li>
              <li>Tree-based carbon credits</li>
              <li>Corporate sustainability plans</li>
            </ul>
          </InfoCard>

          <InfoCard
            heading="Community Engagement"
            description="Empower local communities through education and tree planting."
            icon={iconWrapper(<Users className={iconProps} />)}
            buttonText="Get Started"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Volunteer with us</li>
              <li>Educational workshops</li>
              <li>Community forest days</li>
            </ul>
          </InfoCard>

          <InfoCard
            heading="Corporate Partnerships"
            description="Collaborate with us on large-scale reforestation and CSR programs."
            icon={iconWrapper(<Handshake className={iconProps} />)}
            buttonText="Donate Now"
            leftAlign={true}
          >
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>CSR collaboration</li>
              <li>Tree-planting events</li>
              <li>Impact reporting</li>
            </ul>
          </InfoCard>

        </div>
      </div>
    </div>
  );
};

export default Plantee;
