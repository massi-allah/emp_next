// pages/jobs.js (or wherever you're fetching the jobs)
'use server'
import axios from 'axios';

// Fetch multiple jobs with pagination and filters (server-side)
export const fetchJobs = async (page = 1, limit = 6, filters = {}, sortBy = 'created_date') => {
  const apiKey = process.env.API_KEY; // Server-side environment variable (not exposed to the client)
  const API_BASE_URL = process.env.API_URL; // Server-side environment variable (not exposed to the client)

  try {
    // Construct the query params dynamically
    const params = {
      page,
      limit,
      ordering: sortBy,
      title: filters.title || '',
      category: filters.category_names?.length ? filters.category_names.join(',') : '',
      organization: filters.organization || '',
      employment_type: filters.employment_type || '',
      salary_min: filters.salary_min || '',
      salary_max: filters.salary_max || '',
      location: filters.location || '',
      years_of_experience_min: filters.years_of_experience_min || '',
      years_of_experience_max: filters.years_of_experience_max || '',
      education: filters.education || '',
      gender: filters.gender || '',
      close_date_before: filters.close_date_before || '',
      close_date_after: filters.close_date_after || '',
      translation_language: filters.translation_language || '',
    };

    const response = await axios.get(`${API_BASE_URL}/jobs/`, {
      headers: {
        Authorization: `Api-Key ${apiKey}`, // Use the API key for authentication
      },
      params,
    });

    return response.data; // Assuming the API returns paginated data with 'results' and 'total' fields
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Fetch a single job's details by ID (server-side)
export const fetchJob = async (id) => {
  const apiKey = process.env.API_KEY; // Server-side environment variable (not exposed to the client)
  const API_BASE_URL = process.env.API_URL; // Server-side environment variable (not exposed to the client)

  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${id}/`, {
      headers: {
        Authorization: `Api-Key ${apiKey}`, // Use the API key for authentication
      },
    });

    return response.data; // Assuming the API returns the job data
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

// Server-side function to fetch jobs and pass them as props
export async function getServerSideProps(context) {
  const { page = 1, limit = 6, filters = {}, sortBy = 'created_date' } = context.query;

  try {
    const jobs = await fetchJobs(page, limit, filters, sortBy); // Fetch jobs from the API
    return {
      props: {
        jobs, // Pass jobs data as props to the page
      },
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return {
      props: {
        jobs: [], // Return an empty array if there's an error
      },
    };
  }
}

// Server-side function to fetch a single job by ID and pass it as props
export async function getServerSidePropsForJob(context) {
  const { id } = context.params;

  try {
    const job = await fetchJob(id); // Fetch job details from the API
    return {
      props: {
        job, // Pass job data as props to the page
      },
    };
  } catch (error) {
    console.error('Error fetching job:', error);
    return {
      props: {
        job: null, // Return null if there's an error
      },
    };
  }
}
