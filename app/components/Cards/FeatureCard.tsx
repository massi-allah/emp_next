"use client";

import Image from "next/image";

interface FeatureCardProps {
    title: string,
    body: string,
    icon?: string,
}

export default function FeatureCard({ title, body, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col justify-start gap-16 p-40 flex-1 max-w-[350px] border-5 border-white rounded-2xl aspect-[1/1.2]"  data-aos="fade-up">
      {/* Icon */}
      {icon && (
        <div className="w-45 flex">
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
      )}
      {/* Title */}
      <h5 className="">{title}</h5>
      {/* Body */}
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  );
}
