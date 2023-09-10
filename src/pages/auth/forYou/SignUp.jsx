import { useState } from "react";
import { countriesData } from "../../../data/countriesData";
import CountriesSelect from "./CountriesSelect";
import { Link } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";

export default function SignUp() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredCounty, setFilteredCounty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    setIsCountrySelected(true);
  };

  const filteredCountries = countriesData.filter((option) =>
    option.label.toLowerCase().includes(filteredCounty.toLowerCase())
  );

  return (
    <div className="relative p-3 md:p-6 pt-10">
      <div className="max-w-[800px] h-screen mx-auto">
        <div className="logo mb-5 flex items-center justify-center">
          <Link to="/">
            <div className="text-4xl font-bold text-[#00A9A4]">
              Saturn
            </div>
          </Link>
        </div>
        <p className="text-center text-[#001435] text-3xl font-semibold">
          Let&apos;s get started
        </p>
        <p className="text-center text-[#001435] text-lg mt-3 font-semibold">
          Where do you live?
        </p>
        <div className="mt-8">
          <CountriesSelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleDropdown={toggleDropdown}
            filteredCounty={filteredCounty}
            setFilteredCounty={setFilteredCounty}
            filteredCountries={filteredCountries}
            handleOptionSelect={handleOptionSelect}
            isCountrySelected={isCountrySelected}
          />
        </div>
      </div>
      <CFooter />
    </div>
  );
}
