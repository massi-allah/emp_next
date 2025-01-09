"use client";
import Image from "next/image";
import Link from "next/link";

interface JobCategoryCardSmallProps {
  title: string;
  body: string;
  tag: string;
  link: string;
  icon?: string;
}

export default function JobCategoryCardSmall({ title, body, tag, link, icon }: JobCategoryCardSmallProps) {
  return (
    <div className="flex flex-col justify-start gap-16 p-40  md:max-w-[308px]  max-h-400px border-6 border-primary-200 rounded-2xl" data-aos="fade-up">
      {/* Icon */}
      {icon && (
        <div className="w-45 flex bg-primary-200 rounded-button-pill">
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
      )}
      {/* Title */}
      <h6 className="">{title}</h6>
      {/* Body */}
      <p className="text-sm text-gray-600">{body}</p>
      <div className="flex items-center justify-between">
        <ul className="list-disc list-inside"><li className="secondary text-primary-600 font-bold">{tag}</li></ul>
        <Link href={link ?? "/"} className="w-54 h-40 px-16 bg-primary-200 hover:bg-primary-400 rounded-button-pill">
          <Image src="/icons/hugeicons_link-circle.svg" alt="link" width={40} height={40} className="w-full h-full" />
        </Link>
      </div>
    </div>
  );
}
