import { useState } from "react";
import Image from "next/image";
import Dropdown from "./GenericDropDown";
import FullScreenPopup from "./MobileFiltersPopUp";

export default function SearchForm({ filters, setFilters, resetFilters }) {
  // Handle typing in the search input field
  const handleTitleChange = (e) => {
    setFilters({ ...filters, title: e.target.value }); // Update the title filter
  };

  // Options for filters
  const locationSuggestions = [
    "Badakhshan",
    "Badghis",
    "Baghlan",
    "Balkh",
    "Bamyan",
    "Daykundi",
    "Farah",
    "Faryab",
    "Ghazni",
    "Ghor",
    "Helmand",
    "Herat",
    "Jowzjan",
    "Kabul",
    "Kandahar",
    "Kapisa",
    "Khost",
    "Kunar",
    "Kunduz",
    "Laghman",
    "Logar",
    "Nangarhar",
    "Nimroz",
    "Nuristan",
    "Paktia",
    "Paktika",
    "Panjshir",
    "Parwan",
    "Samangan",
    "Sar-e Pol",
    "Takhar",
    "Urozgan",
    "Wardak",
    "Zabul",
  ];
  const genderOptions = ["Male", "Female"];
  const jobTypes = ["Full time", "Part time", "Freelance", "Contract"];
  const years_of_experience_suggestions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const categories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Nurse",
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className="flex flex-col lg:px-64 md:px-40 sm:px-16 py-16 md:gap-4 sm:gap-8 z-40"
      data-aos="fade-down"
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Main Search Bar */}
        <div className="flex w-full items-center gap-10">
          <div className="flex w-full lg:px-40 lg:py-8 sm:px-16 sm:py-4 sm:text-xm-sm items-center justify-center sm:rounded-button-pill gap-8 md:rounded-none md:rounded-t-8 bg-white">
            <input
              type="text"
              placeholder="Search for jobs, skills, or companies..."
              className="w-full px-4 py-2 bg-transparent text-black outline-none border-none focus:ring-0"
              value={filters.title || ""} // Bind the input to the title filter value
              onChange={handleTitleChange} // Handle input change to update title filter
            />
            <button type="submit">
              <Image
                src="/icons/cuida_search-outline.svg"
                height={24}
                width={24}
                alt="/"
              />
            </button>
          </div>
          <button
            type="button"
            className="md:hidden bg-primary-500 aspect-square w-40 h-40 rounded-button-pill flex items-center justify-center"
            onClick={() => setIsPopupOpen(true)}
          >
            <Image
              src="/icons/mi_filter.svg"
              alt="Filter Icon"
              height={24}
              width={24}
            />
          </button>
          {/* Use the FullScreenPopup component */}
          <FullScreenPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            filters={filters} // Pass filters to FullScreenPopup
            setFilters={setFilters} // Pass setFilters to FullScreenPopup
            resetFilters={resetFilters}
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="md:flex sm:hidden lg:px-40 lg:py-0 gap-16 items-center justify-start rounded-b-8 bg-white">
        {/* Location Dropdown */}
        <Dropdown
          value={filters.location || []} // Pass the list of selected locations
          setValue={(selectedLocations) => {
            setFilters({ ...filters, location: selectedLocations }); // Update the location filter
          }}
          options={locationSuggestions} // Options for locations
          placeholder="Location"
          iconSrc="/icons/mdi_location.svg"
          isMultiSelect={false}
        />
        {/* Category Dropdown */}
        <Dropdown
          value={filters.category_names || []} // Pass the list of selected categories
          setValue={(selectedCategories) => {
            setFilters({ ...filters, category_names: selectedCategories }); // Update the category_names filter
          }}
          options={categories} // Options for categories
          placeholder="Category"
          iconSrc="/icons/nrk_category-active.svg"
          isMultiSelect={true}
        />
        {/* Gender Dropdown */}
        <Dropdown
          value={filters.gender || []} // Pass the list of selected genders
          setValue={(selectedGender) => {
            setFilters({ ...filters, gender: selectedGender }); // Update the gender filter
          }}
          options={genderOptions} // Options for gender
          placeholder="Gender"
          iconSrc="/icons/cuida_search-outline.svg"
          isMultiSelect={false}
        />
        {/* Job Type Dropdown */}
        <Dropdown
          value={filters.employment_type || []} // Pass the list of selected job types
          setValue={(selectedJobType) => {
            setFilters({ ...filters, employment_type: selectedJobType }); // Update the job type filter
          }}
          options={jobTypes} // Options for job types
          placeholder="Job Type"
          iconSrc="/icons/bxs_category-alt.svg"
          isMultiSelect={false}
        />
        {/* Job Education Dropdown */}
        <Dropdown
          value={filters.years_of_experience_min || []} // Pass the list of selected experience years
          setValue={(selectedExperience) => {
            setFilters({
              ...filters,
              years_of_experience_min: selectedExperience,
            }); // Update the years of experience filter
          }}
          options={years_of_experience_suggestions} // Options for years of experience
          placeholder="Years Of Experience"
          iconSrc="/icons/bxs_category-alt.svg"
          isMultiSelect={false}
        />
        <div className="flex w-fit">
          <button
            className="flex flex-nowrap underline"
            onClick={() => {
              resetFilters();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
