"use client";  // This is to mark this as a client-side component
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useState, useEffect } from 'react';

import JobCard from '../components/Cards/JobCard';
import SearchForm from './SearchBar/SearchBar';
import SortByDropdown from '../components/SortbyCom';
import Pagination from './SearchBar/PageNavigation';

import { fetchJobs, Job } from '../services/jobService';  // Import the fetchJobs function



interface FiltersType {
  title: string;
  category_names: string[];
  organization: string;
  employment_type: string;
  location: string;
  education: string;
  gender: string;
  close_date_before: string;
  close_date_after: string;
  translation_language: string,
}

const defaultFilters: FiltersType = {
  title: '',
  category_names: [],
  organization: '',
  employment_type: '',
  location: '',
  education: '',
  gender: '',
  close_date_before: '',
  close_date_after: '',
  translation_language: 'en',
};

const JobsPage = () => {
  const [sortBy, SetSortBy] = useState<string>('-created_date');
  const [filters, setFilters] = useState<typeof defaultFilters>(defaultFilters);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalJobs, setTotalJobs] = useState<number>(0); // Total number of jobs for pagination

  const resetFilters = () => {
    setFilters(defaultFilters)
  };

  const sortOptions = ['Newest', 'Oldest'];
  const handleSortChange = (value: string) => {
    if (value === 'Newest') {
      SetSortBy('-created_date');
    } else {
      SetSortBy('created_date');
    }
  };

  useEffect(() => {
      // Initialize AOS globally
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

 

  const jobsPerPage = 20;

  // This effect should always be the same and not conditional
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true); // Start loading
        const jobsData = await fetchJobs(currentPage, jobsPerPage, filters, sortBy);  // Fetch the job data
        setJobs(jobsData.results);  // Update state with the fetched jobs
        setTotalJobs(jobsData.count);  // Update jobsData.count number of jobs
      } catch {
        setError('Failed to load jobs');  // Handle any error
      } finally {
        setLoading(false);  // Stop loading once the data is fetched
      }
    };

    loadJobs();  // Call the async function inside useEffect
  }, [currentPage, filters, sortBy]);  // Re-run when currentPage changes

   // Calculate total pages based on total jobs and jobs per page
   const totalPages = Math.ceil(totalJobs / jobsPerPage);

  return (
    <div className='flex flex-col'>
      <SearchForm filters={filters} setFilters={setFilters} resetFilters={resetFilters} />

      <div className="flex lg:px-64 md:px-40 sm:px-16 gap-24">
        {/* <div className="lg:block w-1/5 sm:hidden" data-aos="fade-right">
          <LeftNavbar />
        </div> */}

        <div className="flex lg:w-full sm:w-full flex-col gap-16" data-aos='fade-up'>
          <div className="flex h-fit justify-between w-full">
            <div className="flex gap-16 items-center">
              <h5>Jobs</h5>
              <p className="lg:text-sm-lg md:text-sm-md sm:text-sm-sm py-4 px-16 bg-white w-fit h-fit rounded-button-pill">{totalJobs ?? "0"}</p>
            </div>            
            <SortByDropdown options={sortOptions} onSelect={handleSortChange} />
          </div>

          {/* Move loading and error states inside the jobs section */}
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}

          {/* Render jobs only when data is available */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16">
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

          <div className="flex w-full mb-64" data-aos='fade-up'>
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)} // Update current page when user clicks
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
