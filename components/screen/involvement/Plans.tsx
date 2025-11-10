import React from "react";
import InfoCard from "@/components/base/InfoCard";

const Plans = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:flex-row lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <InfoCard leftAlign={true} className="rounded">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500 font-medium mb-5">
                Seedling Supporter
              </span>
              <span className="text-green-700 text-xl font-bold">
                $25/month
              </span>
              <span className="text-gray-600 text-sm">
                Plants 50 trees annually
              </span>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2 text-sm">
                <li>Monthly updates</li>
                <li>Digital certificate</li>
                <li>Impact dashboard access</li>
              </ul>
            </div>
            <button className="mt-4 bg-gray-100 text-green-700 font-medium py-3 px-6 rounded w-full text-center">
              Choose Plan
            </button>
          </InfoCard>

          {/* Card 2 */}
          <InfoCard leftAlign={true} className="relative">
            {/* Popular badge */}
            <span className="absolute top-0 right-0 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
              Popular
            </span>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-sm text-gray-500 mb-5 font-medium">
                Forest Guardian
              </span>
              <span className="text-green-700 text-xl font-bold">
                $50/month
              </span>
              <span className="text-gray-600 text-sm">
                Restores 100 trees annually
              </span>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2 text-sm">
                <li>Monthly updates</li>
                <li>Digital certificate</li>
                <li>Priority dashboard access</li>
              </ul>
            </div>
            <button className="mt-4 bg-green-700 text-white font-medium py-3 px-6 rounded w-full text-center">
              Choose Plan
            </button>
          </InfoCard>

          {/* Card 3 */}
          <InfoCard leftAlign={true}>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500 mb-5 font-medium">
                Forest Steward
              </span>
              <span className="text-green-700 text-xl font-bold">
                $100/month
              </span>
              <span className="text-gray-600 text-sm">
                Adopts 1 acre of forest
              </span>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 mt-2 text-sm">
                <li>Monthly updates</li>
                <li>Digital certificate</li>
                <li>Impact dashboard & report</li>
              </ul>
            </div>
            <button className="mt-4 bg-gray-100 text-green-700 font-medium py-3 px-6 rounded w-full text-center">
              Choose Plan
            </button>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Plans;
