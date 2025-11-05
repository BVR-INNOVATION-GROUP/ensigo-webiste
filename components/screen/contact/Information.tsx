import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const Information = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Container 1 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="General Inquiries" leftAlign={true} />
            <p className="text-gray-600">email@gmail.com</p>
            <div className="flex items-center gap-2">
                            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">+256 767 899 380</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">Kilmarnock Road, Nairobi Kenya</p>
            </div>
          </div>

          {/* Container 2 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="Partnership Inquiries" leftAlign={true} />
            <p className="text-gray-600">For corporate partnerships, sponserships and collaboration opportunities.</p>
            <a href="mailto:email@gmail.com" className="text-gray-600">
              partnershipss@ensigoafrica.org
            </a>
          </div>

          {/* Container 3 */}
          <div className="flex-1 bg-white rounded-2xl p-8 md:p-16">
            <SectionHeader heading="Media & Press" leftAlign={true} />
            <p className="text-gray-600">For media inquiries, interview requests, and press materials</p>
            <a href="press@gmail.com" className="text-gray-600">
              press@ensigoafrica.org
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Information;
