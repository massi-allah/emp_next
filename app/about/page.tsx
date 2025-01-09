"use client"
import Image from "next/image"
import FeatureCardSmall from "../components/Cards/FeatureCardSmall"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
      // Initialize AOS globally
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
    return (
      <div>
        <div className="flex lg:flex-row sm:flex-col min-h-[600px] items-center justify-center">
          <div className="flex flex-col  lg:w-2/4 p-64 gap-32" data-aos="fade-up">
            <h1 className="font-Righteous">Empowering <span className="text-primary-500">Talents,</span> Simplifying <span className="text-primary-500">Recruiment</span></h1>
          </div>
          <div className="flex w-fit h-fit overflow-hidden" data-aos="fade-left">
            <Image src="/asset/Image Holder.jpg" alt="employ environment" height={700} width={700} className="object-contain" />
          </div>
        </div>


        <div className="flex lg:p-64 md:p-40 sm:px-16 md:flex-row sm:flex-col justify-around py-128">
          <FeatureCardSmall icon="/icons/streamline_target.svg" title="Our Mission" body="Our mission is to revolutionize the job search process by offering a platform where job seekers can connect with employers, find opportunities, and build careers with confidence. We aim to simplify recruitment, making it faster and more accessible for everyone." />
          <FeatureCardSmall icon="/icons/tabler_device-vision-pro.svg" title="Our Vision" body="We envision a world where everyone has the tools and resources they need to succeed in their careers. By creating a platform that is inclusive, efficient, and forward-thinking, we aim to shape the future of work for both job seekers and employers." />
        </div>

        <div className="flex flex-col items-center lg:p-64 md:p-40 sm:py-40 md:px-64 sm:px-16 md:gap-40 sm:gap-16 bg-primary-200">
          <h2 data-aos="fade-up">Our Values</h2>
          <div className="flex flex-col">
            <div className="flex items-center justify-center md:flex-row sm:flex-col-reverse" data-aos="fade-up">
              <Image src="/asset/Leonardo_Phoenix_A_moody_cinematic_photograph_of_a_social_medi_2 1.jpg" width={656} height={476} alt="/" className="md:w-2/4 sm-w-full" />
              <div className="flex flex-col lg:p-40 md:p-8 sm:px-0 sm:py-40 gap-16 md:w-2/4 sm-w-full2/4 sm-w-full">
                <div className="border-s-3 border-primary-900 ps-16">
                  <h3 className="">Innovation</h3>
                  <p>Always evolving to meet the needs of our users with cutting-edge solutions.</p>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row-reverse items-center justify-center sm:flex-col-reverse" data-aos="fade-up">
              <Image src="/asset/pexels-cottonbro-4630669 1.jpg" width={656} height={476} alt="/" className="md:w-2/4 sm-w-full" />
              <div className="flex flex-col lg:p-40 md:p-8 sm:px-0 sm:py-40 gap-16 md:w-2/4 sm-w-full">
                <div className="border-s-3 border-primary-900 ps-16">
                  <h3>Empowerment</h3>
                  <p>Helping individuals unlock their potential and succeed in their careers.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:flex-row sm:flex-col-reverse" data-aos="fade-up">
              <Image src="/asset/Leonardo_Kino_XL_A_design_focused_on_collaboration_with_interc_2 1 (1).jpg" width={656} height={476} alt="/" className="md:w-2/4 sm-w-full" />
              <div className="flex flex-col lg:p-40 md:p-8 sm:px-0 sm:py-40 gap-16 md:w-2/4 sm-w-full">
                <div className="border-s-3 border-primary-900 ps-16">
                  <h3>Integrity</h3>
                  <p>Upholding trust, honesty, and transparency in all of our interactions.</p>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row-reverse items-center justify-center sm:flex-col-reverse" data-aos="fade-up">
              <Image src="/asset/Leonardo_Kino_XL_A_design_focused_on_collaboration_with_interc_3 1 (1).jpg" width={656} height={476} alt="/" className="md:w-2/4 sm-w-full" />
              <div className="flex flex-col lg:p-40 md:p-8 sm:px-0 sm:py-40 gap-16 md:w-2/4 sm-w-full">
                <div className="border-s-3 border-primary-900 ps-16">
                  <h3>Collaboration</h3>
                  <p>Working together to build better solutions and stronger communities.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="flex lg:p-128 md:p-40 sm:px-16 sm:py-64">
          <div className="flex flex-col w-full gap-32 items-center justify-center h-full  ">
            <h3 className="text-primary-800 font-Righteous" data-aos="fade-up">How We Work</h3>
            <p className="secondary max-w-[700px] font-semibold text-center text-primary-800" data-aos="fade-up">
              At Employ, we simplify job searching with easy-to-use tools like advanced filtering, job recommendations, 
              and personalized notifications. 
              We make sure our job listings are relevant and up-to-date, helping users quickly find the best opportunities.
            </p>
          </div>
        </div>

        <div className="flex lg:p-64 md:p-40 sm:px-16 sm:py-40 gap-24 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-16 bg-primary-700 text-center items-center sm:px-40 md:py-54 sm:py-40 text-white rounded-8 w-full">
            <h3 data-aos="fade-up" className="secondary">Got an Idea & Want to bring it to Employ?</h3>
            <h6 data-aos="fade-up" className="">Message us at <span className="underline"><a href="mailto:team@eveon.io">team@eveon.io</a></span></h6>
          </div>
        </div>

      </div>
    )
};