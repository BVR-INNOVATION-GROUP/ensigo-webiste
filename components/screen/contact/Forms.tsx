import React from "react";
import Button from "@/components/base/Button";
import { SendHorizontal } from "lucide-react";

const Forms = () => {
  return (
    <div className="bg-gray-345 py-10">
      <form action="" className=" bg-white rounded-2xl p-8 flex flex-col gap-6">
        {/* First & Last Name Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
            />
          </div>

          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Drago"
              className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+(256 782 147 142)"
            className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Organization (Optional)
          </label>
          <input
            type="text"
            placeholder="Drago Ent. LTD"
            className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Inquiry Type
          </label>
          <input
            list="inquiry-types"
            type="text"
            placeholder="Select or type inquiry type"
            className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
          />
          <datalist id="inquiry-types">
            <option value="Partnership Opportunities" />
            <option value="Volunteer Application" />
            <option value="Corporate Sponsorship" />
            <option value="Media & Press" />
            <option value="Research Collaboration" />
            <option value="General Inquiry" />
            <option value="Technical Support" />
          </datalist>
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            placeholder="Say something"
            rows={4}
            className="w-full rounded-lg p-3 focus:outline-none bg-gray-100"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button title="Back to Home" className="bg-gray-200 rounded-[5]" />

          <Button
            title="Send"
            rightIcon={<SendHorizontal className="w-4 h-4" />}
            variant="fill"
          />
        </div>
      </form>
    </div>
  );
};

export default Forms;
