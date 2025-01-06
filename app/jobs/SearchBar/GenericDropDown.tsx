import { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";

interface DropdownProps {
  value: string[]; // Selected values
  setValue: (value: string[]) => void; // Update selected values
  options: string[]; // List of options
  placeholder: string;
  iconSrc: string;
  isMultiSelect: boolean; // Enable multi-select
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  setValue,
  options,
  placeholder,
  iconSrc,
  isMultiSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Input for filtering
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for outside click

  // Handle input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsOpen(true); // Open dropdown on typing
  };

  // Handle selection
  const handleSelect = (item: string) => {
    if (isMultiSelect) {
      if (value.includes(item)) {
        setValue(value.filter((selectedItem) => selectedItem !== item)); // Remove
      } else {
        setValue([...value, item]); // Add
      }
    } else {
      setValue(item); // Single selection
      setIsOpen(false); // Close dropdown
    }
    setInputValue(""); // Clear input for new filtering
  };

  // Handle key press for custom value
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      handleSelect(inputValue.trim());
    }
  };

  // Handle clearing all selections
  const handleClear = () => {
    setValue([]);
    setInputValue("");
  };

  // Close dropdown on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper to format display
  const formatDisplay = () => {
    if (isMultiSelect) {
      return value.join(", ") + (inputValue ? `, ${inputValue}` : "");
    }
    return inputValue || value || "";
  };

  return (
    <div
      className="relative flex gap-4 items-center w-full border-r-2 pe-16"
      ref={dropdownRef}
    >
      <Image src={iconSrc} height={24} width={24} alt="icon" />
      <input
        type="text"
        value={formatDisplay()}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-transparent text-black outline-none border-none focus:ring-0"
        onClick={() => setIsOpen(true)}
      />
      {value.length > 0 && (
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 hover:text-red-500 focus:outline-none"
        >
          Clear
        </button>
      )}
      {isOpen && (
        <ul className="absolute top-32 z-50 w-full bg-white text-black outline-none border-none focus:ring-0 rounded-lg shadow-lg mt-2 max-h-128 p-8 overflow-y-auto">
          {options
            .filter((item) =>
              item.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <li
                key={index}
                onMouseDown={(e) => e.preventDefault()} // Prevent blur
                onClick={() => handleSelect(item)}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  value.includes(item) ? "font-bold bg-gray-200" : ""
                }`}
              >
                {item}
              </li>
            ))}
          {inputValue && !options.includes(inputValue) && (
            <li
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(inputValue)}
              className="px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer italic"
            >
              Add "{inputValue}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
