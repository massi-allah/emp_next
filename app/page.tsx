"use client"
import Image from "next/image";
import React from "react";
import FeatureCard from "./components/Cards/FeatureCard";
import JobCategoryCardSmall from "./components/Cards/JobCategoryCardSmall";
import JobCategoryCardLarge from "./components/Cards/JobCategoryCardLarge";
import FeatureCardSmall from "./components/Cards/FeatureCardSmall";
import JobCard from "./components/Cards/JobCard";
import Button from "./components/Buttons/PrimaryButton";
import FAQSection from "./components/Cards/FAQSection";
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
      <div className="relative flex flex-col items-center justify-center h-[90vh] px-64 overflow-hidden">
        <Image
          src="/asset/Circles.svg"
          width={1012}
          height={700}
          alt="nothing"
          className="absolute object-contain top-0 z-[-10] inset-0 mx-auto h-full w-4/5 scale-200 lg:scale-120"
        />
        <Image 
            src="/asset/DecorativeCardJobFloating1.svg"
            height={40}
            width={158}
            alt="nothing"
            className="absolute lg:top-[7vh] sm:top-[5vh] lg:left-[10vw] sm:left-[5vw] object-contain mb-16 h-fit"
          />
        <Image 
            src="/asset/DecorativeCardJobFloating2.svg"
            height={40}
            width={158}
            alt="nothing"
            className="absolute lg:top-[45vh] sm:top-[12vh] lg:right-[10vw] sm:right-[-48] object-contain mb-16 h-fit"
          />
        <Image 
          src="/asset/DecorativeCardJobFloating3.svg"
          height={40}
          width={158}
          alt="nothing"
          className="absolute top-[82vh] left-[20vw] object-contain mb-16 h-fit"
        />

        <div className="flex flex-col gap-40" data-aos="fade-up">

          <div className="flex flex-col">
            <div className="relative w-fit lg:my-[-10] ps-[68px]">
              <h2 className="font-Righteous lg:text-[80px]">Find</h2>
              <Image 
                src="/asset/Decorative Card2.svg"
                height={122}
                width={40}
                alt="nothing"
                className="absolute object-contain bottom-0 lg:right-[-48] sm:right-[-32] mb-16 h-full"
              />
            </div>
            <div className="relative lg:my-[-10]">
              <h2 className="font-Righteous lg:text-[80px]">the best</h2>
              <Image 
                src="/asset/Decorative Card4.svg"
                height={122}
                width={40}
                alt="nothing"
                className="absolute object-contain bottom-0 lg:left-[-48] sm:left-[-32] lg:mb-16 sm:mb-8 h-full"
              />
            </div>
            <div className="relative lg:my-[2] ps-[35px] ">
              <h2 className="font-Righteous lg:text-[80px] text-white rounded-[28px] bg-green px-24 py-8">
                Vacancies
              </h2>
              <Image 
                src="/asset/Decorative Card1.svg"
                height={200}
                width={50}
                alt="nothing"
                className="absolute object-contain bottom-0 right-[-10] lg:mb-48 sm:mb-32 h-full"
              />
            </div>
            <div className="relative lg:my-[-10]">
              <h2 className="font-Righteous lg:text-[80px]">with ease.</h2>
              <Image 
                src="/asset/Decorative Card3.svg"
                height={122}
                width={40}
                alt="nothing"
                className="absolute object-contain bottom-0  lg:left-[-40] lg:mb-16 sm:left-[-24]  sm:mb-8  h-full"
              />
            </div>
          </div>


          <div className="flex flex-col gap-16 items-center" data-aos="fade-up">
            <p className="text-center">Discover your dream job effortlessly with Employ.</p>
            <Button color="primary" radius="pill" link="/jobs">
              Find Jobs
            </Button>
          </div>

        </div>
      </div>
      
      <div className="flex sm:flex-col md:flex-row gap-64 px-64 sm:my-64 md:my-128 text-center">
        <div className="flex flex-col w-full gap-8" data-aos="fade-up">
          <h5 className="secondary font-bold">25K Jobs</h5>
          <p className="secondary">Explore <strong>25K jobs</strong> around Afghanistan with <strong>3 translation</strong>versions.</p>
        </div>
        <div className="flex flex-col w-full gap-8" data-aos="fade-up">
          <h5 className="secondary font-bold">3K Trusted Companies</h5>
          <p className="secondary">Learn about 3k trusted companies by Employ.</p>
        </div>
        <div className="flex flex-col w-full gap-8" data-aos="fade-up">
          <h5 className="secondary font-bold">Community</h5>
          <p className="secondary">Learn and connect with Employ's community of professionals and experts.</p>
        </div>
      </div>


    <div className="flex flex-col bg-primary-200">
      <div className="md:p-64 sm:px-16 sm:py-40 flex flex-col gap-40 w-full">
        <h4  data-aos="fade-up">Employ <span className="text-primary-600 font-bold">Simplified</span><br />Job Searching</h4>
        <div className="flex flex-wrap justify-between gap-24">
          <FeatureCard icon="/icons/Language.svg" title="Multi-Language Support" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." />
          <FeatureCard icon="/icons/akar-icons_infinity.svg" title="All in One Place" body="Say goodbye to endless searches. Our platform brings job opportunities from diverse industries and locations together, ensuring you can find the perfect match for your skills and aspirations—all in one convenient place." />
          <FeatureCard icon="/icons/fluent-emoji-flat_feather.svg" title="Find Jobs Effortlessly" body="Discover opportunities tailored to your skills and preferences. Our intuitive platform makes job searching fast and hassle-free, so you can focus on what matters most—your career." />
          <FeatureCard icon="/icons/fluent_people-community-12-filled.svg" title="Community and Resources" body="Join our community to learn tips for job hunting, career development, and leveraging Employ to its fullest potential." />
        </div>
      </div>
    </div>


    <div className="flex flex-col gap-40 md:my-128 md:mx-64 sm:my-40 sm:mx-24">
      <div className="flex justify-between sm:flex-col md:flex-row gap-10">
        <h4  data-aos="fade-up" className="font-bold">Popular Job Categories</h4>
        <Button color="primary" radius="pill" size="small" icon cssClass="font-bold" link="/jobs">Explore</Button>
      </div>
      <div className="flex gap-24 sm:flex-col md:flex-row">
        <JobCategoryCardLarge title="Design & Development" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." tag="69 Jobs available" link="/jobs" />
        <div className="flex flex-wrap gap-24">
          <JobCategoryCardSmall title="Business & Consulting" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." tag="36 Jobs available" icon="/icons/bulb.svg" link="/jobs" />
          <JobCategoryCardSmall title="Production Operation" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." tag="19 Jobs available" icon="/icons/iconamoon_box-thin.svg" link="/jobs" />
          <JobCategoryCardSmall title="Education & Training" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." tag="26 Jobs available" icon="/icons/solar_book-broken.svg" link="/jobs" />
          <JobCategoryCardSmall title="Marketing & Sales" body="Break language barriers with our platform. Seamlessly switch between Pashto, Dari, and English to browse or apply jobs in the language you're most comfortable with." tag="65 Jobs available" icon="/icons/uit_web-grid.svg" link="/jobs" />
        </div>
      </div>
    </div>



    <div className="flex flex-col my-128 gap-40 md:mx-64 sm:mx-16">
      <div className="flex justify-between sm:flex-col md:flex-row gap-10" data-aos="fade-up">
        <h4 className="font-bold">Featured Jobs</h4>
        <Button color="primary" radius="pill" size="small" icon cssClass="font-bold" link="/jobs">Explore</Button>
      </div>
      <div className="flex md:gap-24 sm:gap-16 overflow-x-scroll overflow-y-hidden h-fit">
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
        <JobCard title="Finance Officer" post_time="03 Days Ago" salary="10k" org_name="Google" org_logo="/icons/devicon_google.svg" location="Balkh Afghanistan" link="/"  />
      </div>
    </div>
    
    <div className="relative flex md:p-64 sm:px-16 sm:py-40 gap-24 w-full mt-[140px]">
      <div className="flex flex-col gap-24 bg-primary-700 sm:text-center md:text-start sm:items-center md:items-start md:px-54 sm:px-40 md:py-32 sm:py-24 sm:pt-128 text-white rounded-8 w-full">
        <h4 data-aos="fade-up">Your Next Opportunity Awaits</h4>
        <p data-aos="fade-up">With Employ you can browse jobs, connect with employers, and take the next step in your career journey.</p>
        <Button color="white" radius="pill" link="/jobs" >Get Started</Button>
      </div>
      <Image  data-aos="fade-up" src="/asset/Characters.svg" alt="chars" height={392} width={354} className="absolute sm:w-[70vw] md:w-auto md:right-80 sm:left-64 md:left-auto md:bottom-64 sm:top-[-100px] md:top-auto object-contain"/>
    </div>


    <div className="flex md:flex-row sm:flex-col md:p-64 sm:px-16 sm:py-40 gap-24 w-full h-[790px] my-40 bg-primary-200">
      <div className="flex items-center justify-center md:w-2/4 h-full">
        <div className="flex flex-col gap-24">
          <h3 data-aos="fade-up">About Employ</h3>
          <p className="md:w-[540px]" data-aos="fade-up">
            Employ is more than just a job board. Our mission is to empower talents across the region by connecting them with
            opportunities that match their skills and aspirations. From browsing jobs to simplifying applications, we are here to make your
            career journey seamless.
          </p>
          <Button size="large" color="primary" radius="pill" cssClass="font-bold" link="/about">Learn More</Button>
        </div>
      </div>
      <div className="flex md:w-2/4"  data-aos="fade-up">
        <Image src="/asset/Image Holder.jpg" alt="/" width={720} height={700} />
      </div>
    </div>

    <div className="flex sm:flex-col items-center md:p-64 sm:px-16 sm:py-40 gap-40 w-full h-fit my-40 ">
      <div className="flex flex-col md:gap-40 sm:gap-24 max-w-[600px] justify-center text-center">
        <h4 data-aos="fade-up" className="">Be Part of <br /> Our Thriving Job Seeker Community</h4>
        <p data-aos="fade-up" className="secondary">
          At Employ, we believe in building a supportive environment where job seekers can connect, share 
          experiences, and access helpful resources. Join our community to accelerate your job search and career growth!
        </p>
      </div>
      <div className="flex md:flex-row sm:flex-col items-center">
        <FeatureCardSmall icon="/icons/fluent_people-community-12-filled.svg" title="Networking" body="Connect with like-minded job seekers and potential employers." />
        <FeatureCardSmall icon="/icons/mdi_learn-outline.svg" title="Learning" body="Access job search tips, career advice, and expert webinars." />
        <FeatureCardSmall icon="/icons/mdi_help-outline.svg" title="Support" body="Share experiences and get advice from others in similar situations." />
      </div>
      <div className="flex flex-col items-center">
        <Button color="primary" radius="pill" size="large" cssClass="font-bold">Start Connecting Today!</Button>
      </div>
    </div>




    <div className="flex sm:flex-col items-center md:p-64 sm:px-16 sm:py-40 gap-40 w-full h-fit my-40 ">
      <div className="flex flex-col md:gap-40 sm:gap-24 max-w-[600px] justify-center text-center">
        <h3 data-aos="fade-up" className="secondary">Got Questions? <br /> We Have Answers</h3>
        <p className="secondary" data-aos="fade-up">
        We understand you may have some questions. Below are answers to common queries. If you can’t find what you're looking for,
         feel free to reach out to us.
        </p>
      </div>
      <div className="flex flex-col w-full gap-24">
        <FAQSection />
      </div>  
    </div>
    
    <div className="flex md:p-64 sm:px-16 sm:py-40 gap-24 w-full">
      <div className="flex flex-col gap-8 bg-primary-700 text-center items-center sm:px-40 md:py-54 sm:py-24 text-white rounded-8 w-full">
        <h3 data-aos="fade-up" className="secondary">Need Assistance?</h3>
        <p data-aos="fade-up" className="">Message us at <span className="underline">support@eveon.io</span></p>
      </div>
    </div>

  </div>
  );
}
