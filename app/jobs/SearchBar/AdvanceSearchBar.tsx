import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';

// Reusable FilterButton Component
const FilterButton: React.FC<{ filter: string; onClick: () => void; selectedFilter: string }> = ({ filter, onClick, selectedFilter }) => {
  return (
    <div className="flex justify-start gap-10 items-start bg-white py-24 px-16">
      <p className="lg:text-sm-lg md:text-sm-md sm:text-sm-sm font-bold">{filter}</p>
      <button
        onClick={onClick}
        className="lg:text-sm-lg md:text-sm-md sm:text-sm-sm bg-primary-500 text-white px-16 py-4 hover:underline rounded-button-pill"
      >
        {selectedFilter || 'None'}
      </button>
    </div>
  );
};

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFilter: (filter: string) => void;
  options: string[]; // Options are strings only
  filterCategory: string;
  icon: string; // Icon for the filter (e.g., dollar icon for Salary Range)
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  isOpen,
  onClose,
  onSelectFilter,
  options,
  filterCategory,
  icon,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
    setShowDropdown(value.length > 0);
  };

  const handleSelectOption = (option: string) => {
    setSelectedFilter(option);
    setShowDropdown(false);
  };

  const handleSelect = () => {
    if (selectedFilter) {
      onSelectFilter(selectedFilter);
    }
    onClose();
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const popupContent = (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-30">
        <div
          ref={popupRef}
          className="bg-white p-6 rounded-lg shadow-lg w-1/3 flex flex-col gap-24"
        >
          <h6 className="text-lg font-semibold secondary">
            Select {filterCategory}
          </h6>
          <div className="relative w-full mt-4">
            {/* Text field with suggestions */}
            <div className="border border-gray-300 rounded-button-pill px-16 py-8 bg-white flex items-center gap-2">
              <Image src={icon} height={24} width={24} alt="icon" />
              <input
                type="text"
                placeholder="Type to search..."
                value={selectedFilter || ""}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="flex-1 focus:outline-none text-gray-800"
                onFocus={() => setShowDropdown(true)}
              />
            </div>

            {/* Suggestions dropdown */}
            {showDropdown && (
              <div className="absolute top-full left-0 w-fit px-0 bg-white border border-gray-300 rounded-md mt-2 z-10">
                {options
                  .filter((option) =>
                    option.toLowerCase().includes((selectedFilter || "").toLowerCase())
                  )
                  .map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectOption(option)}
                      className="flex items-center gap-2 py-2 px-40 hover:bg-gray-100 cursor-pointer"
                    >
                      <span>{option}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4 w-full items-center gap-8">
            <button
              onClick={handleSelect}
              className="bg-primary-500 text-white hover:bg-primary-600 py-16 px-32 rounded-button-pill"
            >
              Apply
            </button>
            <button
              onClick={onClose}
              className="bg-white text-primary-500 border-2 border-primary-500 font-bold hover:bg-primary-600 hover:text-white py-16 px-32 rounded-button-pill"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );

  return ReactDOM.createPortal(popupContent, document.body);
};


// FilterCategory Component
interface FilterCategoryProps {
  filterCategory: string;
  options: string[]; // Corrected type to include label and icon
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  icon: string;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ filterCategory, options, selectedFilter, onSelectFilter, icon }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <FilterButton filter={filterCategory} onClick={handleOpenPopup} selectedFilter={selectedFilter} />
      <FilterPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSelectFilter={onSelectFilter}
        filterCategory={filterCategory}
        options={options}
        icon={icon}
      />
    </>
  );
};

// LeftNavbar Component
const LeftNavbar: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string }>({});

  // Dynamic filter options
  const salaryOptions = ["11k-20k", "12k-220K"];
  const postDateOptions = ['Last Day', 'Last Week', 'Last Month'];
  const companySizeOptions = ['Small (1-50 Employees)','Medium (51-1000 Employees)','Large (1000+ Employees)'];

  const handleSelectFilter = (filterCategory: string, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterCategory]: filter,
    }));
  };

  const handleReset = () => {
    setSelectedFilters({});
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center bg-white py-24 px-16 rounded-t-8">
        <p className="text-xl font-semibold">Job Filters</p>
        <button
          onClick={handleReset}
          className="lg:text-sm-lg md:text-sm-md sm:text-sm-sm bg-background border-2 border-primary-600 px-16 py-4 hover:underline rounded-button-pill"
        >
          Reset
        </button>
      </div>

      {/* Salary Range Section */}
      <FilterCategory
        filterCategory="Salary Range:"
        options={salaryOptions}
        selectedFilter={selectedFilters['Salary Range'] || ''}
        onSelectFilter={(filter) => handleSelectFilter('Salary Range', filter)}
        icon='/icons/akar-icons_location.svg'
      />

      {/* Post Date Section */}
      <FilterCategory
        filterCategory="Post Date:"
        options={postDateOptions}
        selectedFilter={selectedFilters['Post Date'] || ''}
        onSelectFilter={(filter) => handleSelectFilter('Post Date', filter)}
        icon='/icons/akar-icons_location.svg'

      />

      {/* Company Size Section */}
      <FilterCategory
        filterCategory="Company Size:"
        options={companySizeOptions}
        selectedFilter={selectedFilters['Company Size'] || ''}
        onSelectFilter={(filter) => handleSelectFilter('Company Size', filter)}
        icon='/icons/akar-icons_infinity.svg'

      />

      {/* Display Selected Filters */}
      {Object.keys(selectedFilters).map((key) => (
        <div key={key} className="mt-4 p-2 bg-green-200 rounded-md">
          <p>
            {key}: {selectedFilters[key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LeftNavbar;
