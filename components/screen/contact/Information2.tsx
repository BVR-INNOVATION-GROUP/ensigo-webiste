import SectionHeader from "@/components/base/SectionHeader";
import React from "react";
import { Mail, Phone } from "lucide-react";

const Information = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Container 1 - Nairobi, Kenya */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16 flex flex-col gap-4">
            <SectionHeader heading="Nairobi, Kenya" leftAlign={true} />
            <p className="text-gray-700 font-medium">Kilimani Road, Nairobi</p>
            <div className="flex flex-col pl-6 gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">nairobi@ensigoafrica.org</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">+256 767 899 380</p>
              </div>
            </div>
          </div>

          {/* Container 2 - Accra, Ghana */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16 flex flex-col gap-4">
            <SectionHeader heading="Accra, Ghana" leftAlign={true} />
            <p className="text-gray-700 font-medium">East Legon, Accra</p>
            <div className="flex flex-col pl-6 gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">accra@ensigoafrica.org</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">+233 245 678 901</p>
              </div>
            </div>
          </div>

          {/* Container 3 - Kampala, Uganda */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16 flex flex-col gap-4">
            <SectionHeader heading="Kampala, Uganda" leftAlign={true} />
            <p className="text-gray-700 font-medium">Kololo, Kampala</p>
            <div className="flex flex-col pl-6 gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">kampala@ensigoafrica.org</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">+256 789 123 456</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Information;
