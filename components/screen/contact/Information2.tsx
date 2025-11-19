import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Mail, Phone, MapPin } from "lucide-react";

const Information2 = () => {
  const offices = [
    {
      heading: "Nairobi, Kenya",
      address: "Kilimani Road, Nairobi",
      email: "nairobi@ensigoafrica.org",
      phone: "+256 767 899 380",
      icons: {
        email: <Mail className="w-4 h-4" />,
        phone: <Phone className="w-4 h-4" />,
        location: <MapPin className="w-4 h-4" />,
      },
    },
    {
      heading: "Accra, Ghana",
      address: "East Legon, Accra",
      email: "accra@ensigoafrica.org",
      phone: "+233 245 678 901",
      icons: {
        email: <Mail className="w-4 h-4" />,
        phone: <Phone className="w-4 h-4" />,
      },
    },
    {
      heading: "Kampala, Uganda",
      address: "Kololo, Kampala",
      email: "kampala@ensigoafrica.org",
      phone: "+256 789 123 456",
      icons: {
        email: <Mail className="w-4 h-4" />,
        phone: <Phone className="w-4 h-4" />,
      },
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
              address={
                office.icons?.location ? (
                  <span className="flex items-center gap-2">
                    <span>{office.address}</span>
                  </span>
                ) : (
                  office.address
                )
              }
              email={
                office.icons?.email ? (
                  <span className="flex items-center gap-2">
                    {office.icons.email}
                    <span>{office.email}</span>
                  </span>
                ) : (
                  office.email
                )
              }
              phone={
                office.icons?.phone ? (
                  <span className="flex items-center gap-2 underline">
                    {office.icons.phone}
                    <span>{office.phone}</span>
                  </span>
                ) : (
                  office.phone
                )
              }
              leftAlign
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information2;
