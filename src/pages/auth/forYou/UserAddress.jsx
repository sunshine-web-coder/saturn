import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";
import FloatingLabelInput from "../../../component/input/FloatingLabelInput";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
// import { countriesData } from "../../../data/countriesData";
import { nigeriaStates } from "../../../data/nigeriaStates";
import { DatePicker } from "antd";
import Button from "../../../component/button/Button";
import useAuthentication from "../../../routes/useAuthentication";

export default function UserAddress() {
  const { isLogin } = useAuthentication();
  // const [selected, setSelected] = useState(countriesData[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [yourCity, setYourCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedState, setSelectedState] = useState(nigeriaStates[1]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const [selectedDateError, setSelectedDateError] = useState("");
  const [addressOneError, setAddressOneError] = useState("");
  const [yourCityError, setYourCityError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [checkboxAgreeError, setCheckboxAgreeError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    const validateDate = (date) => {
      if (!date) {
        errors.selectedDate = "Please select a date of birth.";
        return false;
      }
  
      return true;
    };

    if (addressOne.trim() === "") {
      errors.addressOne = "Your address is required.";
    }

    if (yourCity.trim() === "") {
      errors.yourCity = "Your city is required";
    }

    if (postalCode.trim() === "") {
      errors.postalCode = "Your postal code is required";
    }

    if (!checkboxChecked) {
      errors.checkbox = "You must agree to the terms and conditions.";
    }

    if (validateDate(selectedDate)) {
      // Valid date, you can perform your desired action here
      console.log('Selected date:', selectedDate.format('YYYY-MM-DD'));
    }
  

    setSelectedDateError(errors.selectedDate || "");
    setAddressOneError(errors.addressOne || "");
    setYourCityError(errors.yourCity || "");
    setPostalCodeError(errors.postalCode || "");
    setCheckboxAgreeError(errors.checkbox || "");

    if (Object.keys(errors).length === 0) {
      navigate("/dashboard"); // Navigate only if there are no errors
    }
    isLogin();
  };

  const handleSelectedDateChange = (date) => {
    const currentDate = new Date(); // Get the current date
    if (date.isAfter(currentDate)) {
      setSelectedDateError("Please select a valid date of birth.");
    } else {
      setSelectedDateError(""); // Reset the error message
      setSelectedDate(date);
    }
  };
  

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-between h-full relative p-3 md:p-6 pt-5">
      <div className="pb-[100px]">
        <div className="logo max-w-[800px] mx-auto mb-7 flex items-center justify-between">
          <button
            type="button"
            onClick={navigateBack}
            className="w-11 h-11 text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </button>
          <Link to="/">
            <div className="text-4xl font-bold text-[#00A9A4]">
              Saturn
            </div>
          </Link>
          <div></div>
        </div>
        <p className="text-center max-w-[450px] mx-auto text-[#001435] text-3xl font-semibold">
          What’s your home address?
        </p>
        <div className="mt-4 mx-auto max-w-[500px]">
          <p className="mb-5 font-semibold text-center">
            Please use your primary residence. It can’t be a PO box.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            {/* <div className="relative z-30">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative cursor-pointer mt-1">
                  <label
                    htmlFor="Nationality"
                    className="absolute cursor-pointer text-[13px] font-medium text-gray-700 z-20 left-4 top-1"
                  >
                    Nationality
                  </label>
                  <Listbox.Button className="relative w-full cursor-default p-4 pb-0 pt-5 h-[50px] border-[1px] border-neutral-500 rounded bg-white  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block text-base truncate">
                      {selected.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {countriesData.map((country, countryIdx) => (
                        <Listbox.Option
                          key={countryIdx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active ? "bg-[#ebebeb]" : "text-gray-900"
                            }`
                          }
                          value={country}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block text-base truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {country.label}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#3B82F6]">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div> */}

            <div className="relative">
              <label
                htmlFor="expiring date"
                className={`absolute z-10 font-medium text-gray-700 left-4 transition-all ${
                  focused ||
                  (selectedDate && selectedDate.year && selectedDate.month)
                    ? "text-[12px] top-1 font-semibold text-gray-700"
                    : "text-[15px] top-[14px] font-medium text-gray-700"
                }`}
              >
                Date of birth
              </label>
              <DatePicker
                onFocus={handleFocus}
                format="DD-MM-YYYY"
                onBlur={handleBlur}
                selected={selectedDate}
                onChange={handleSelectedDateChange}
                placeholder={focused ? "DD-MM-YYYY" : ""}
                className="z-20 dateOfBirth bg-transparent border-neutral-500 w-full p-4 pb-1 pt-5 h-[50px] font-medium text-sm"
              />
              {selectedDateError && (
              <p className="text-[#C40B0B] font-medium text-sm mt-1">
                <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                {selectedDateError}
              </p>
            )}
            </div>
            <div>
              <FloatingLabelInput
                label="Address line 1"
                type="text"
                value={addressOne}
                onChange={(e) => setAddressOne(e.target.value)}
              />
              {addressOneError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {addressOneError}
                </p>
              )}
            </div>

            <div>
              <FloatingLabelInput
                label="Address line 2"
                type="text"
                value={addressTwo}
                onChange={(e) => setAddressTwo(e.target.value)}
              />
            </div>

            <div className="flex w-full gap-8">
              <div className="w-full">
                <FloatingLabelInput
                  label="City"
                  type="text"
                  value={yourCity}
                  onChange={(e) => setYourCity(e.target.value)}
                  className="w-full"
                />
                {yourCityError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {yourCityError}
                  </p>
                )}
              </div>
              <div className="w-full">
                <FloatingLabelInput
                  label="Postal code"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full"
                />
                {postalCodeError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {postalCodeError}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Listbox value={selectedState} onChange={setSelectedState}>
                <div className="relative mt-1">
                  <label
                    htmlFor="State/Capital"
                    className="absolute cursor-pointer text-[13px] font-medium text-gray-700 z-20 left-4 top-1"
                  >
                    State/Capital
                  </label>
                  <Listbox.Button className="relative cursor-pointer w-full p-4 pb-0 pt-5 h-[50px] border-[1px] border-neutral-500 rounded bg-white  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block text-base truncate">
                      {selectedState.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {nigeriaStates.map((yourState) => (
                        <Listbox.Option
                          key={yourState.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active ? "bg-[#ebebeb]" : "text-gray-900"
                            }`
                          }
                          value={yourState}
                        >
                          {({ selectedState }) => (
                            <>
                              <span
                                className={`block text-base truncate ${
                                  selectedState ? "font-medium" : "font-normal"
                                }`}
                              >
                                {yourState.label}
                              </span>
                              {selectedState ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#3B82F6]">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div>
              <div className="checkbox-wrapper-13 relative mt-3 mb-6 flex gap-3">
                <div>
                  <input
                    id="c1-13"
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={() => setCheckboxChecked(!checkboxChecked)}
                  />
                </div>
                <label htmlFor="c1-13" className="text-sm cursor-pointer">
                  I confirm that I have read, consent and agree to
                  PayPal&apos;s&nbsp;
                  <Link className="font-semibold text-[#003087] hover:underline">
                    User Agreement
                  </Link>
                  &nbsp;and&nbsp;
                  <Link className="font-semibold text-[#003087] hover:underline">
                    Privacy Statement
                  </Link>
                  , and I am of legal age. I understand that I can change my
                  communication preferences any time in my PayPal Account.
                </label>
              </div>
              {checkboxAgreeError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {checkboxAgreeError}
                </p>
              )}
            </div>

            <div className="">
              <Button
                type="submit"
                text="Agree & Create Account"
                className="pb-3 pt-3 max-w-[300px]"
              />
            </div>
          </form>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
