"use client";

import Image from "next/image";

interface FeatureCardSmallProps {
    title: string,
    body: string,
    icon?: string,
}

export default function FeatureCardSmall({ title, body, icon }: FeatureCardSmallProps) {
  return (
    <div className="flex flex-col justify-cetner gap-16 p-40 max-w-[500px]" data-aos="fade-up">
      {/* Icon */}
      {icon && (
        <div className="w-full flex justify-center">
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
      )}
      {/* Title */}
      <h6 className="text-center">{title}</h6>
      {/* Body */}
      <p className="text-sm text-gray-600 text-center">{body}</p>
    </div>
  );
}
