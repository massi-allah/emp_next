import axios from 'axios';

// Define the types for job data and filters
export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_min?: number;
  salary_max?: number;
  employment_type?: string;
  category?: string;
  // Add other job properties as needed
}

export interface Filters {
  title?: string;
  category_names?: string[];
  organization?: string;
  employment_type?: string;
  salary_min?: number;
  salary_max?: number;
  location?: string;
  years_of_experience_min?: number;
  years_of_experience_max?: number;
  education?: string;
  gender?: string;
  close_date_before?: string;
  close_date_after?: string;
}

// Define the structure of the response when fetching multiple jobs
export interface FetchJobsResponse {
  results: Job[];
  total: number;
}

// Base URL for the API
const API_BASE_URL = 'http://192.168.1.139:2500/api';

// Fetch multiple jobs with pagination and filters
export const fetchJobs = async (
  page = 1,
  limit = 6,
  filters: Filters = {},
  sortBy = 'created_date'
): Promise<FetchJobsResponse> => {
  const username = 'massiullah';
  const password = 'abc';
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  try {
    // Construct the query params dynamically
    const params = {
      page,
      limit,
      ordering: sortBy,
      title: filters.title || '', // Default to empty string if no title filter
      category: filters.category_names?.length ? filters.category_names.join(',') : '', // Handle multiple categories
      organization: filters.organization || '', // Organization filter
      employment_type: filters.employment_type || '', // Employment type filter
      salary_min: filters.salary_min || '', // Minimum salary filter
      salary_max: filters.salary_max || '', // Maximum salary filter
      location: filters.location || '', // Location filter
      years_of_experience_min: filters.years_of_experience_min || '', // Min years of experience filter
      years_of_experience_max: filters.years_of_experience_max || '', // Max years of experience filter
      education: filters.education || '', // Education filter
      gender: filters.gender || '', // Gender filter
      close_date_before: filters.close_date_before || '', // Close date before filter
      close_date_after: filters.close_date_after || '', // Close date after filter
    };

    const response = await axios.get(`${API_BASE_URL}/jobs/`, {
      headers: {
        Authorization: authHeader,
      },
      params,
    });

    return response.data; // Assuming the API returns paginated data with 'results' and 'total' fields
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Fetch a single job's details by ID
export const fetchJob = async (id: string): Promise<Job> => {
  const username = 'massiullah';
  const password = 'abc';
  const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${id}/`, {
      headers: {
        Authorization: authHeader,
      },
    });

    return response.data; // Assuming the API returns the job data
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};
