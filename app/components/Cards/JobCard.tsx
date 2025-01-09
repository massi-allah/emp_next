"use client";

import Image from "next/image";
import Link from "next/link";


interface JobCardProps {
    title: string;
    post_time: string;
    salary: string;
    org_name: string;
    org_logo: string;
    location: string;
    link: string;
    animation: string;
}

export default function JobCard({ title, post_time, salary, org_name, org_logo, location, link, animation}: JobCardProps) {
  return (
    <div className="relative flex flex-col justify-start items-start gap-16 p-40 mn-w-[250px] max-w-[350px] object-contain bg-white rounded-2xl" data-aos={animation ?? 'fade-left'}>
      {/* Title */}
      <h5 className="w-full truncate">{title}</h5>

      <div className="flex flex-row gap-16 font- justify-center">
        <div className="flex gap-4 items-center"><Image src="/icons/subway_time-3.svg" alt="" width={16} height={16} /><p className="font-secondary lg:text-sm-lg sm:text-sm-sm">{post_time}</p></div>
        <div className="flex gap-4 items-center"><Image src="/icons/tabler_coin.svg" alt="" width={16} height={16} /><p className="font-secondary lg:text-sm-lg sm:text-sm-sm truncate w-[100px]">{salary}</p></div>
      </div>
      
      <div className="flex gap-16 items-center">
        {org_logo && (
          <div className="w-fit flex bg-background p-8 rounded-button-pill">
            <Image src={org_logo} alt={`${title} icon`} width={30} height={30} />
          </div>
        )}
      <h6 className="secondary">{org_name}</h6>
      </div>
      
      <div className="flex gap-8 items-center justify-center">
        <div className="p-4 bg-background rounded-button-pill">
          <Image src="/icons/akar-icons_location.svg" alt="" width={16} height={16} />
        </div>
        <p className="font-secondary lg:text-sm-lg sm:text-sm-sm">{location}</p>
      </div>
      <div className="absolute right-[-10px] bottom-[-10px]">
        <Link href={link ?? "/"} className="flex w-fit px-16 py-8 bg-primary-500 fill-white hover:bg-primary-600 rounded-button-pill border-13 border- border-background">
          <Image 
            src="/icons/hugeicons_link-circle white.svg"
            width={40}
            height={40}
            alt="Link Icon" />
        </Link>
      </div>
    </div>
  );
}
