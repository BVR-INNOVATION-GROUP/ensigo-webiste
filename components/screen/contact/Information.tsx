import SectionHeader from "@/components/base/SectionHeader";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Information = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Container 1 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="General Inquiries" leftAlign={true} />
            <div className="mt-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-600" />
              <p className="text-gray-600">email@gmail.com</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-600" />
              <p className="text-gray-600">+256 767 899 380</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-600" />
              <p className="text-gray-600">Kilmarnock Road, Nairobi Kenya</p>
            </div>
          </div>

          {/* Container 2 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="Partnership Inquiries" leftAlign={true} />
            <p className="text-gray-600 mt-4">
              For corporate partnerships, sponsorships, and collaboration
              opportunities.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-600" />
              <a
                href="mailto:partnershipss@ensigoafrica.org"
                className="text-gray-600 underline"
              >
                partnershipss@ensigoafrica.org
              </a>
            </div>
          </div>

          {/* Container 3 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="Media & Press" leftAlign={true} />
            <p className="text-gray-600 mt-4">
              For media inquiries, interview requests, and press materials.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-600" />
              <a
                href="mailto:press@ensigoafrica.org"
                className="text-gray-600 underline"
              >
                press@ensigoafrica.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
