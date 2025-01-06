import { useState } from 'react';

const SortByDropdown: React.FC<{ options: string[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="flex justify-start gap-4 items-center">
      <p className="lg:text-sm-lg md:text-sm-md sm:text-sm-sm font-bold text-gray-500">Sort By:</p>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-transparent border-none w-fit outline-none  text-black cursor-pointer font-semibold"
      >
        {options.map((option, index) => (
          <option key={index} value={option} className=''>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortByDropdown;