import { useState } from 'react';
import CustomSelect from './CustomSelect';
import { searchFilter } from './data';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Select">
      <CustomSelect options={searchFilter} onSelect={handleSelect} />
    </div>
  );
};

export default Select;
