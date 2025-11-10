import React from "react";
import InfoCard from "@/components/base/InfoCard";

const Information2 = () => {
  const offices = [
    {
      heading: "Nairobi, Kenya",
      address: "Kilimani Road, Nairobi",
      email: "nairobi@ensigoafrica.org",
      phone: "+256 767 899 380",
    },
    {
      heading: "Accra, Ghana",
      address: "East Legon, Accra",
      email: "accra@ensigoafrica.org",
      phone: "+233 245 678 901",
    },
    {
      heading: "Kampala, Uganda",
      address: "Kololo, Kampala",
      email: "kampala@ensigoafrica.org",
      phone: "+256 789 123 456",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {offices.map((office, index) => (
            <InfoCard
              key={index}
              heading={office.heading}
              address={office.address}
              email={office.email}
              phone={office.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information2;
