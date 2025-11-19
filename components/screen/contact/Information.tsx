import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Mail, Phone, MapPin } from "lucide-react";

const Information = () => {
  const contactInfo = [
    {
      heading: "General Inquiries",
      email: (
        <span className="flex items-center gap-2 ">
          <Mail className="w-4 h-4" />
          <span>email@gmail.com</span>
        </span>
      ),
      phone: (
        <span className="flex items-center gap-2 ">
          <Phone className="w-4 h-4 underline" />
          <span>+256 767 899 380</span>
        </span>
      ),
      location: (
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Kilmarnock Road, Nairobi Kenya</span>
        </span>
      ),
    },
    {
      heading: "Partnership Inquiries",
      description:
        "For corporate partnerships, sponsorships, and collaboration opportunities.",
      email: (
        <span className="flex items-center gap-2 ">
          <Mail className="w-4 h-4" />
          <span>partnerships@ensigoafrica.org</span>
        </span>
      ),
    },
    {
      heading: "Media & Press",
      description:
        "For media inquiries, interview requests, and press materials.",
      email: (
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>press@ensigoafrica.org</span>
        </span>
      ),
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {contactInfo.map((info, index) => (
            <InfoCard
              key={index}
              heading={info.heading}
              description={info.description}
              email={info.email}
              phone={info.phone}
              location={info.location}
              leftAlign ={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
