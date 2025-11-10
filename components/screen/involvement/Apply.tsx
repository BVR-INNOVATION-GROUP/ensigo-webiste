import React from "react";
import InfoCard from "@/components/base/InfoCard";
import { Locate } from "lucide-react";
import Button from "@/components/base/Button";

const Apply = () => {
  return (
    <div className="bg-gray-50 py-16 w-full">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <InfoCard
            heading={
              <div className="flex justify-between items-center w-full gap-40">
                <h3 className="text-xl font-semibold text-green-700">
                  Field Volunteer
                </h3>
                <span className="text-[#E8C34A] text-sm font-medium ml-auto bg-[#E8C34A]/17 p-1">
                  2+ weeks
                </span>
              </div>
            }
            leftAlign={true}
          >
            <div className="flex items-center text-gray-600 text-sm -mt-4">
              <Locate size={14} className="mr-2 text-gray-500" />
              <span className="text-xs">Various sites across Africa</span>
            </div>
            <p className="text-gray-700 mt-6">
              Hands-on tree planting, nursery work, and community engagement
            </p>
            <Button
              title="Apply Now"
              className="inline-block bg-green-700 text-white font-medium py-3 px-6 rounded w-110 text-center mt-4"
            />
          </InfoCard>

          {/* Card 2 */}
          <InfoCard
            heading={
              <div className="flex justify-between items-center w-full gap-40">
                <h3 className="text-xl font-semibold text-green-700">
                  Technical Specialist
                </h3>
                <span className="text-[#E8C34A] text-sm font-medium ml-auto bg-[#E8C34A]/17 p-1">
                  Flexible
                </span>
              </div>
            }
            leftAlign={true}
          >
            <div className="flex items-center text-gray-600 text-sm -mt-4">
              <Locate size={14} className="mr-2 text-gray-500" />
              <span className="text-xs">Remote</span>
            </div>
            <p className="text-gray-700 mt-6">
              Contribute skills in GIS, data analysis, web development, or
              design
            </p>
            <Button
              title="Apply Now"
              className="inline-block bg-gray-100 text-green-700 font-medium py-3 px-6 rounded w-110 text-center mt-4"
            />
          </InfoCard>

          {/* Card 3 */}
          <InfoCard
            heading={
              <div className="flex justify-between items-center w-full gap-40">
                <h3 className="text-xl font-semibold text-green-700">
                  Community Liaison
                </h3>
                <span className="text-[#E8C34A] text-sm font-medium ml-auto bg-[#E8C34A]/17 p-1">
                  3+ Months
                </span>
              </div>
            }
            leftAlign={true}
          >
            <div className="flex items-center text-gray-600 text-sm -mt-4">
              <Locate size={14} className="mr-2 text-gray-500" />
              <span className="text-xs">Kenya, Uganda, or Ghana</span>
            </div>
            <p className="text-gray-700 mt-6">
              Bridge between local communities and project teams
            </p>
            <Button
              title="Apply Now"
              className="inline-block bg-gray-100 text-green-700 font-medium py-3 px-6 w-110 rounded text-center mt-4"
            />
          </InfoCard>

          {/* Card 4 */}
          <InfoCard
            heading={
              <div className="flex justify-between items-center w-full gap-40">
                <h3 className="text-xl font-semibold text-green-700">
                  Research Assistant
                </h3>
                <span className="text-[#E8C34A] text-sm font-medium ml-auto bg-[#E8C34A]/17 p-1">
                  6+ Months
                </span>
              </div>
            }
            leftAlign={true}
          >
            <div className="flex items-center text-gray-600 text-sm -mt-4">
              <Locate size={14} className="mr-2 text-gray-500" />
              <span className="text-xs">Remote or on-site</span>
            </div>
            <p className="text-gray-700 mt-6">
              Support environmental research and impact assessment
            </p>
            <Button
              title="Apply Now"
              className="inline-block bg-gray-100 text-green-700 font-medium py-3 px-6 w-110 rounded text-center mt-4"
            />
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Apply;
