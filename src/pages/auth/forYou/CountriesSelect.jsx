import { useRef, useState } from "react";
import useOutsideClick from "../../../component/useOutsideClick";
import FloatingLabelInput from "../../../component/input/FloatingLabelInput";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/button/Button";

export default function CountriesSelect({
  selectedOption,
  setSelectedOption,
  isOpen,
  setIsOpen,
  toggleDropdown,
  filteredCounty,
  setFilteredCounty,
  filteredCountries,
  handleOptionSelect,
  isCountrySelected,
}) {
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleFilteredCountyChange = (e) => {
    const inputValue = e.target.value;
    setFilteredCounty(inputValue);
    setSelectedOption(null);
    setIsOpen(true);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCountrySelected || !selectedOption) {
      setError("Choose a country or region from the list.");
    } else {
      setError("");
      navigate("add_mobile");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="custom-select relative">
          <div
            className={`relative ${isOpen ? "open" : ""}`}
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <FloatingLabelInput
              label="Select your country/region"
              type="text"
              value={selectedOption ? selectedOption.label : filteredCounty}
              onChange={handleFilteredCountyChange}
            />
            <i
              className={`fa-solid absolute right-5 top-6 ${
                isOpen ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {isOpen && (
            <ul className="options-list">
              {filteredCountries.map((option, index) => (
                <li
                  key={index}
                  className="option flex items-center gap-3"
                  onClick={() => handleOptionSelect(option)}
                >
                  <img className="w-8 rounded" src={option.flag} alt="flag" />{" "}
                  <span className="font-medium">{option.label}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="max-w-[500px] mt-2 mx-auto">
            {error && (
              <p className="text-[#C40B0B] font-medium text-sm mt-1">
                <i className="fa-solid fa-triangle-exclamation"></i> {error}
              </p>
            )}
          </div>
        </div>

        <div className="text-center mx-auto max-w-[300px] mt-10">
          <Button type="submit" text="Get Started" className="pb-3 pt-3" />
        </div>
      </form>
    </div>
  );
}
