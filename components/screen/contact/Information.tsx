import React from "react";
import InfoCard from "@/components/base/InfoCard";

const Information = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <InfoCard
            heading="General Inquiries"
            email="email@gmail.com"
            phone="+256 767 899 380"
            location="Kilmarnock Road, Nairobi Kenya" />

          <InfoCard
            heading="Partnership Inquiries"
            description="For corporate partnerships, sponsorships, and collaboration opportunities."
            email="partnershipss@ensigoafrica.org" />

          <InfoCard
            heading="Media & Press"
            description="For media inquiries, interview requests, and press materials."
            email="press@ensigoafrica.org" />
        </div>
      </div>
    </div>
  );
};

export default Information;
