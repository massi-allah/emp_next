"use client";

import Image from "next/image";
import Link from "next/link";
import { Interface } from "readline";

interface JobCategoryCardSLargeProps {
  title: string;
  body: string;
  tag: string;
  link: string;
  icon?: string;
}

export default function JobCategoryCardLarge({ title, body, tag, link,  }: JobCategoryCardSLargeProps) {
  return (
    <div className="flex z-10 h-">
      <div className="relative flex flex-col justify-start gap-32 p-40 max-w-full h-full min-h-[650px] border-6 border-primary-200 rounded-2xl" data-aos="fade-up">
        <div className="flex justify-between items-center">
          <h5 className="font-bold">{title}</h5>
          <Link href={link ?? "/"} className="w-fit h-fit p-8 bg-primary-200 hover:bg-primary-300 rounded-button-pill">
            <Image 
              src="/icons/hugeicons_link-circle.svg"
              width={40}
              height={40}
              alt="Link Icon" />
          </Link>
        </div>
        {/* Title */}
        {/* Body */}
        <p className="secondary text-sm text-black">{body}</p>
        <div className="flex items-center justify-between">
          <ul className="list-disc list-inside"><li className="secondary text-primary-600 font-bold">{tag}</li></ul>
        </div>
        <Image
          src="/icons/JobCategory Deco.svg"
          alt="decorating"
          width={520}
          height={527}
          className="absolute right-0 bottom-0 z-[-10] object-contain"
        />

      </div>
    </div>
  );
}
