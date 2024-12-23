import React from "react";
import { Krub } from "next/font/google";

const krub = Krub({
  weight: "400",
  subsets: ["latin"],
});

interface ServicesItemProps {
  title: string; // Title for the service
  description: string; // Description of the service
}

const ServicesItem: React.FC<ServicesItemProps> = ({ title, description }) => {
  return (
    <div>
      <h4 className={`${krub.className} text-xl sm:text-lg`}>{title}</h4>
      <p className={`${krub.className} mt-2 sm:text-base`}>{description}</p>
    </div>
  );
};

export default ServicesItem;