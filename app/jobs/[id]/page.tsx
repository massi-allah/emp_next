"use client";
import Image from "next/image";
import { GetServerSideProps } from 'next';
import SortByDropdown from "@/app/components/SortbyCom";
import Link from "next/link";
import Button from "@/app/components/Buttons/PrimaryButton";
import JobCard from "@/app/components/Cards/JobCard";
import DetailCard from "./DetailCard";
import MiniCard from "./MiniDetailCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useState, use } from "react";
import { fetchJob, Job, fetchJobs } from '../../services/jobService';  // Import the fetchJobs function
import { log } from "console";

interface JobType {
  job_id: string;
  title: string;
  created_date: string;
  salary: string;
  organization: string;
  location: string;
}


interface FiltersType {
  title: string;
  category_names: string[];
  organization: string;
  employment_type: string;
  salary_min: string;
  salary_max: string;
  location: string;
  years_of_experience_min: string;
  years_of_experience_max: string;
  education: string;
  gender: string;
  close_date_before: string;
  close_date_after: string;
}

const defaultFilters: FiltersType = {
  title: '',
  category_names: [],
  organization: '',
  employment_type: '',
  salary_min: '',
  salary_max: '',
  location: '',
  years_of_experience_min: '',
  years_of_experience_max: '',
  education: '',
  gender: '',
  close_date_before: '',
  close_date_after: '',
};

// Define the type for the translation objects
interface Translation {
  job_id: string;
  translation_language: string;
}

const LanguageDropdown = ({ options, onSelect, currentLanguage }) => {
  // Mapping language codes to their full names
  const languageNames = {
    en: "English",
    ps: "Pashto",
    fa: "Farsi", // You can add more language mappings as needed
  };

  return (
    <div className="flex justify-start gap-4 items-center">
      <select 
        onChange={(e) => onSelect(e.target.value)} 
        className="bg-transparent border-none w-fit outline-none text-black cursor-pointer font-semibold"
      >
        <option className="m-4">{languageNames[currentLanguage]} </option>
        {options.map((language) => (
          <option key={language} value={language}>
            {languageNames[language] || language} {/* Show full language name */}
          </option>
        ))}
      </select>
    </div>
  );
};



export default function JobView({ params }: { params: Promise<{ job: string }> }) {
  const { id: initialId } = use(params); // Initial ID from params
  const [id, setId] = useState<string>(initialId || ""); // State for managing ID
  const [language, setLanguage] = useState<string>("English"); // State for language selection
  const [translations, setTranslations] = useState<{ [key: string]: string }>({}); // Translations as a key-value object

  useEffect(() => {
    // Initialize AOS globally
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filters, setFilters] = useState<typeof defaultFilters>(defaultFilters);
  const [sortBy, SetSortBy] = useState<string>('-created_date');

  const jobsPerPage = 20;
  


  useEffect(() => {
    if (id) {
      const fetchJobData = async () => {
        try {
          setLoading(true);
          const jobData = await fetchJob(id); // Fetch job data by ID
          setJob(jobData); // Set the job data in state
          console.log(jobData);
          
          // Transform translations into an array for easy lookup
        const translationsArray: Translation[] = jobData.translations.map((translation: Translation) => ({
          job_id: translation.job_id,
          translation_language: translation.translation_language,
        }));
        const translationsObj: { [key: string]: string } = {};
        translationsArray.forEach((translation) => {
          translationsObj[translation.translation_language] = translation.job_id.toString(); // Ensure job_id is a string
        });
        setTranslations(translationsObj);
        


          // Fetch similar jobs based on category
          if (jobData.category) {
            const jobsData = await fetchJobs(1, jobsPerPage, { ...filters, category_names: [jobData.category] }, sortBy);
            setJobs(jobsData.results);
          }
        } catch (err) {
          setError("Error fetching job data");
        } finally {
          setLoading(false); // Set loading to false when done
        }
      };

      fetchJobData(); // Call the function to fetch job data
    }
  }, [id]); // Re-run the effect when the id, filters, or sortBy changes



  const handleLanguageChange = (value: string) => {
    setLanguage(value); // Update the selected language
    const newId = translations[value]; // Get the translated job ID based on selected language
    console.log(newId);
    
    setId(newId); // Update the job ID to fetch the translated version
  };



  return (
    <div className="flex flex-col lg:px-64 md:px-40 sm:px-16 overflow-hidden">
      {/* Move loading and error states inside the jobs section */}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {!loading && !error && job && ( 
      <div className="">
        <div className="flex justify-between py-16" data-aos='fade-down'>
          <Link href={'/'} className="flex items-center justify-center gap-10">
            <Image src="/icons/lets-icons_back.svg" height={24} width={24} alt="/" />
            <p>Back to Listings</p>
          </Link>
          <div className="flex justify-between">
          <LanguageDropdown
            options={Object.keys(translations)} 
            onSelect={handleLanguageChange}
            currentLanguage={job.translation_language}
          />
          </div>
        </div>

          <div className="flex w-full gap-24 mb-40 lg:flex-row sm:flex-col overflow-hidden">
            
            {/* Left Side Bar */}
            <div className="flex lg:w-1/5 sm:w-full h-fit sm:order-2 lg:order-1" data-aos='fade-up'>
              <div className="flex flex-col bg-white rounded-24 gap-16 py-24 px-16">
                <div className="flex gap-10 flex-col">
                  <Image src="/icons/org_icon_placeholder.png" width={40} alt="" height={40} />
                  <div className="flex flex-col gap-16">
                    <h6>About {job.organization}</h6>
                    <div className="flex gap-4 flex-col">
                      <p className="secondary"><strong>Founder: </strong>{job.organization.founder || "Uknown"}</p>
                      <p className="secondary"><strong>Founded on: </strong>{job.organization.creation_date || "Unknown"}</p>
                      <p className="secondary"><strong>Base: </strong>{job.organization.location || "Unknown"}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-16">
                  <p className="secondary">{job.about_organization}</p>
                  {/* <Button color="red">Learn More</Button> */}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:w-3/5 sm:w-full sm:order-1 lg:order-2 gap-24">
              <div className="flex flex-col gap-10 bg-white items-center w-full py-32 h-fit rounded-24" data-aos='fade-up'>
                <Image src="/icons/org_icon_placeholder.png" width={40} alt="" height={40} />
                <div className="flex flex-col gap-4 items-center">
                  <h5 className="text-center">{job.title}</h5>
                  <div className="flex gap-4 items-center">
                    <p className="text-center text-[#545454]">{job.organization_name} - {job.location}</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <p className="text-center sm:text-sm-sm md:text-sm-md lg:text-sm-lg text-[#808080]">Posted: {job.created_date} · Deadline: {job.close_date} · {job.gender}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-10 justify-center">
                <MiniCard title="Salary" body={job.salary} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="Schedule" body={job.employment_type} icon="/icons/hugeicons_job-search.svg" />
                <MiniCard title="Vacancy No" body={job.vacancy_number} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="No. Jobs" body={job.no_of_jobs} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="Category" body={job.category} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="Contract Duration" body={job.contract_duration} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="Nationality" body={job.nationality} icon="/icons/fluent-mdl2_money.svg" />
                <MiniCard title="Language" body={job.language} icon="/icons/fluent-mdl2_money.svg" />
              </div>

              <DetailCard 
                title="Description" 
                body={job.description || "No description available."}
              />

              <DetailCard 
                title="Job Requirements" 
                body={job.job_requirements || "No requirements provided."}
              />
              <DetailCard 
                title="Education" 
                body={job.education || "No educational requirements provided."}
              />
              <DetailCard 
                title="Experience" 
                body={job.years_of_experience || "No educational requirements provided."}
              />
              <DetailCard 
                title="Submission Guideline" 
                body={job.submission_guideline || "No code of conduct provided."}
              />
              <DetailCard 
                title="Submission Email" 
                body={job.submission_email || "No code of conduct provided."}
              />
            </div>

            {/* Right Side Bar */}
            <div className="grid grid-cols-1 lg:w-1/5 sm:w-full flex-col gap-8 h-fit sm:order-3 lg:order-3">
              <div className="flex w-full bg-white rounded-16 py-8 gap-10" data-aos='fade-up'>
                <p className="w-full text-center">Similar Opportunities</p>
              </div>
                {/* Render jobs only when data is available */}
                {!loading && !error && (
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-16 gap-y-16">
                    {Array.isArray(jobs) && jobs.map((job, index) => (
                      <JobCard
                        key={index}
                        title={job.title}
                        post_time={job.created_date}
                        salary={job.salary}
                        org_name={job.organization}
                        org_logo={'/icons/bxs_category-alt.svg'}
                        location={job.location}
                        link={`jobs/${job.job_id}`}  // Assuming `job.id` is the unique identifier
                        animation="fade-up"
                      />
                    ))}
                  </div>
                )}
            </div>
          </div>
      </div>
      )}
    </div>
  );
}
