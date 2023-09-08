import { useRef, useState } from "react";
import style from "./CustomSelect.module.scss"; // You can create your own CSS for styling
import { DatePicker } from "antd";
import dayjs from "dayjs";
import Button from "../button/Button";
import FloatingLabelInput from "../input/FloatingLabelInput";
import useOutsideClick from "../useOutsideClick";

const CustomSelect = ({
  options,
  defaultOption,
  className,
  onSelect,
  dateForm,
  currencyForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0] || null
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isAllCurrenciesSelected, setIsAllCurrenciesSelected] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  const [minError, setMinError] = useState("");
  const [maxError, setMaxError] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsAllCurrenciesSelected(option.value === "all currencies");
    onSelect(option); // Call the callback function with the selected option
    // setIsOpen(false); // Close the dropdown
  };

  const handleSelectedDateChange = (date, dateType) => {
    if (dateType === "from") {
      setFromDate(date);
    } else if (dateType === "to") {
      setToDate(date);
    }
  };

  const handleSubmit = () => {
    const errors = {};

    if (min.trim() === "") {
      errors.min = "Enter an amount";
    }

    if (max.trim() === "") {
      errors.max = "Enter an amount";
    }

    setMinError(errors.min || "");
    setMaxError(errors.max || "");
  };

  const handleDateSubmit = () => {};

  const currentDate = dayjs();

   // Close the dropdown when clicking outside
   useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative mx-auto max-w-[500px] ${className} ${style.custom_select}`}
      // ref={dropdownRef}
    >
      <div
        className={`p-3 pb-3 flex justify-between pt-4 cursor-pointer ${style.select_header} ${
          isOpen ? "open border-sky-400" : ""
        }`}
        onClick={toggleDropdown}
      >
        <div>
          {selectedOption
            ? selectedOption.label
            : fromDate && toDate
            ? `${fromDate.format("DD-MM-YYYY")} - ${toDate.format(
                "DD-MM-YYYY"
              )}`
            : "Select an option"}
        </div>
        <div>
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </div>
      </div>
      {isOpen && (
        <ul
          className={`border custom_scroll z-20 bg-white overflow-y-auto shadow-sm absolute w-full mt-1 rounded ${style.option_list}`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-3 pb-2 hover:bg-sky-50 transition-all pt-2 cursor-pointer ${
                style.option
              } ${option === selectedOption ? "bg-sky-100 font-semibold" : ""}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
          {dateForm && (
            <div className="mt-2">
              <hr />
              <div className="mt-1 p-2">
                <div className="relative">
                  <label
                    htmlFor="expiring date"
                    className={`absolute text-[12px] z-10 text-gray-700 left-4 transition-all`}
                  >
                    From date
                  </label>
                  <DatePicker
                    format="DD-MM-YYYY"
                    defaultValue={currentDate}
                    selected={fromDate}
                    onChange={(date) => handleSelectedDateChange(date, "from")}
                    className="z-20 dateOfBirth bg-transparent border-neutral-500 w-full p-4 pb-1 pt-5 h-[50px] font-medium text-sm"
                  />
                </div>
                <div className="relative mt-4">
                  <label
                    htmlFor="expiring date"
                    className={`absolute text-[12px] z-10 text-gray-700 left-4 transition-all`}
                  >
                    To date
                  </label>
                  <DatePicker
                    format="DD-MM-YYYY"
                    defaultValue={currentDate}
                    selected={toDate}
                    onChange={(date) => handleSelectedDateChange(date, "to")}
                    className="z-20 dateOfBirth bg-transparent border-neutral-500 w-full p-4 pb-1 pt-5 h-[50px] font-medium text-sm"
                  />
                </div>
                <div className="mt-3">
                  <Button text="Apply" onClick={handleDateSubmit} />
                </div>
              </div>
            </div>
          )}
          {currencyForm && (
            <div className="mt-2">
              <hr />
              <div className="mt-1 p-2">
                <div>
                  <FloatingLabelInput
                    label="Minimum"
                    type="text"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    className={isAllCurrenciesSelected ? "bg-gray-200" : ""}
                    disabled={isAllCurrenciesSelected}
                  />
                  {minError && (
                    <p className="text-[#C40B0B] font-medium text-sm mt-1">
                      <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                      {minError}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <FloatingLabelInput
                    label="Maximum"
                    type="text"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    className={isAllCurrenciesSelected ? "bg-gray-200" : ""}
                    disabled={isAllCurrenciesSelected}
                  />
                  {maxError && (
                    <p className="text-[#C40B0B] font-medium text-sm mt-1">
                      <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                      {maxError}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <Button text="Apply" onClick={handleSubmit} />
                </div>
              </div>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
