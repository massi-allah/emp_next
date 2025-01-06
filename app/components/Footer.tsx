"use client";
import Link from "next/link";
import Image from "next/image";


export default function Footer(){
    return (
        <footer className="flex flex-col gap-8 sm:p-16 md:p-40 lg:px-64 lg:py-16 w-screen" data-aos="fade-up">
            <div className="flex flex-col  md:gap-80 sm:gap-40  bg-primary-700 text-white sm:px-16 sm:py-40 md:p-64 lg:p-80 rounded-[8px]">
                <h2 className="secondary font-bold">Let's Connect</h2>
                <div className="flex gap-80 lg:flex-row sm:flex-col sm:gap-40">
                    <div className="flex flex-col gap-24">
                        <div className="flex items-center gap-8">
                            <Image 
                                src="/logo.png"
                                alt="employ logo with a big e"
                                width={45}
                                height={45}
                            />
                            <h6>Employ</h6>
                        </div>
                        <p className="secondary">
                            Find your next opportunity with Employ - Empowering job seekers to build brighter
                            futures. Discover tailored job listings, create professional CVs, and connect with employers
                            who value your talent. Your career journey starts here.
                        </p>
                    </div>
                    <div className="flex lg:gap-80 sm:gap-32 sm:flex-col md:flex-row md:justify-between whitespace-nowrap">
                        <div className="flex flex-col gap-8">
                            <h6 className="font-bold">Quick Links</h6>
                            <p className="secondary"><Link href="/jobs">Jobs</Link></p>
                            <p className="secondary"><Link href="/">Community</Link></p>
                            <p className="secondary"><Link href="/about">About Us</Link></p>
                            <p className="secondary"><Link href="/">FAQS</Link></p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h6 className="font-bold">Social Media</h6>
                            <p className="secondary"><Link href="/">Telegram</Link></p>
                            <p className="secondary"><Link href="/">Twitter</Link></p>
                            <p className="secondary"><Link href="/">LinkedIn</Link></p>
                            <p className="secondary"><Link href="/">Instagram</Link></p>
                            <p className="secondary"><Link href="/">Facebook</Link></p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h6 className="font-bold">Contact</h6>
                            <p className="secondary"><Link href="/">FAQS</Link></p>
                            <p className="secondary"><Link href="/">Privacy Policy</Link></p>
                            <p className="secondary"><Link href="/">Terms & Conditions</Link></p>
                            <p className="secondary"><Link href="/">Help Center</Link></p>

                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center secondary">Copyright @2025 All Rights Reserved by Eveon Team</p>
        </footer>
    );
};