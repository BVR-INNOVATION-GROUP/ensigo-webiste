import React, { ReactNode } from "react";

interface InfoCardProps {
  heading?: string | ReactNode;
  icon?: ReactNode;
  address?: string;
  email?: string;
  phone?: string;
  className?: string;
  location?: string;
  description?: string;
  children?: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  leftAlign?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  heading,
  icon,
  address,
  email,
  phone,
  location,
  description,
  className,
  children,
  buttonText,
  onButtonClick,
  leftAlign = false,
}) => {
  const textAlignment = leftAlign ? "text-left" : "text-center";
  const itemsAlignment = leftAlign ? "items-start" : "items-center";

  return (
    <div
      className={`flex-1 bg-white p-8 md:p-12 flex flex-col justify-between relative ${
        className ?? ""
      }`}
    >
      {icon && (
        <div
          className={`flex justify-center mb-4 ${
            leftAlign ? "justify-start" : ""
          }`}
        >
          <div className="flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}

      {/* Heading and description */}
      {heading && (
        <h3 className={`text-xl font-semibold ${textAlignment} mb-2`}>
          {heading}
        </h3>
      )}
      {description && (
        <p className={`text-gray-600 leading-relaxed ${textAlignment}`}>
          {description}
        </p>
      )}
      {address && (
        <p className={`text-gray-700 font-medium ${textAlignment}`}>
          {address}
        </p>
      )}
      {location && (
        <div
          className={`flex items-center gap-2 ${
            leftAlign ? "" : "justify-center"
          } text-gray-600`}
        >
          <span>{location}</span>
        </div>
      )}

      {/* Optional Contact Section */}
      {(email || phone) && (
        <div className={`flex flex-col gap-2 mt-6 ${itemsAlignment}`}>
          {email && (
            <a href={`mailto:${email}`} className="text-gray-600 underline">
              {email}
            </a>
          )}
          {phone && <p className="text-gray-600">{phone}</p>}
        </div>
      )}

      {/* Children */}
      {children && <div className="mt-4">{children}</div>}

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="w-full bg-gray-100 text-[var(--primary-dark)] font-medium py-3 text-center mt-4"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default InfoCard;
