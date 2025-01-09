import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./GenericDropDown";

interface FullScreenPopupProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Record<string, string[]>;
  setFilters: (filters: Record<string, string[]>) => void;
  resetFilters: void;
}

const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
  resetFilters,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(filters);

  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      document.body.style.overflow = "hidden";
    } else if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  // Render only on the client-side
  if (typeof window === "undefined") {
    return null;
  }

  

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
  const jobTypes = ["Full-time", "Part-time", "Freelance", "Contract"];
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

  return ReactDOM.createPortal(
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
          <div className="flex flex-col p-40 gap-16 items-center justify-center rounded-8 bg-white">
            <h2 className="text-xl font-semibold text-primary-500">Filters</h2>

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
                className="underline"
                onClick={() => {
                  resetFilters();
                }}
              >
                Reset all
              </button>
            </div>

            {/* Apply and Close Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default FullScreenPopup;
