"use client";
import Image from "next/image";

interface FeatureBoxProps {
  image: string;
  role_name: string;
  description: string;
}

export default function FeatureBox({ image, role_name, description }: FeatureBoxProps) {
  return (
    <div className="flex flex-col items-center w-[300px] h-[320px] bg-white rounded-lg shadow-lg p-6 space-y-4">
      {/* Icon */}
      <div className="flex justify-center items-center w-12 h-12 rounded-full">
        <Image src={image} width={40} height={40} alt="Feature icon" />
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-normal text-black text-center">
        {role_name}
      </h3>

      {/* Description */}
      <p className="text-[16px] text-gray-600 text-center font-light mt-8 leading-6">
        {description}
      </p>
    </div>
  );
}
