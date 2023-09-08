import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";
import { useEffect, useState } from "react";
import Select from "react-select";
import { FlagIcon } from "react-flag-kit"; // Import flag icons
import PhoneInput from "react-phone-number-input";
import { countriesData } from "../../../data/countriesData";
import Button from "../../../component/button/Button";
import LoadingSpinner from "../../../component/loadingSpinner/LoadingSpinner";

const countryOptionsWithIcons = countriesData.map((country) => ({
  value: country.value,
  label: <FlagIcon className="w-[40px]" code={country.value} />, // Use flag icon component
}));

export default function AddMobile() {
  const [phoneError, setPhoneError] = useState("");
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countryOptionsWithIcons[0]
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!value) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    // Clear phone error if valid
    setPhoneError("");

    // Show loader
    setIsLoading(true);

    // Simulate a delay of 2 seconds (adjust as needed)
    setTimeout(() => {
      // Hide loader
      setIsLoading(false);

      // Navigate to the next route after the delay
      navigate("/signup/complete_phone_confirmation");
    }, 3000); // 2 seconds delay
  };

  return (
    <div className="flex flex-col justify-between h-screen relative p-3 md:p-6 pt-5">
      <div className="">
        <div className="logo max-w-[800px] mx-auto mb-7 flex items-center justify-between">
          <div>
            <Select
              options={countryOptionsWithIcons}
              value={selectedCountry}
              onChange={setSelectedCountry}
              styles={customSelectStyles}
            />
          </div>
          <Link to="/">
            <img
              className="w-6"
              src="https://i.ibb.co/mCHhPkS/Capture-removebg-preview.png"
              alt=""
            />
          </Link>
          <Link to="/login" className="text-[#3B82F6] text-lg font-semibold">
            Login
          </Link>
        </div>
        <p className="text-center max-w-[400px] mx-auto text-[#001435] text-3xl font-semibold">
          Sign up for PayPal
        </p>
        <div className="mt-4 mx-auto max-w-[500px]">
          <p className="mb-5 text-center font-semibold">
            First, add your mobile number
          </p>
          <form onSubmit={handleSubmit} className="mt-10 addMobile">
            <PhoneInput
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
              international
              defaultCountry={selectedCountry.value}
              placeholder="Enter phone number"
              value={value}
              //   onChange={setValue}
              countryCallingCodeEditable={false}
              onChange={(newValue) => {
                console.log("Phone number value:", newValue);
                setValue(newValue);
              }}
            />
            {phoneError && (
              <p className="text-[#C40B0B] font-medium text-sm mb-2">
                <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                {phoneError}
              </p>
            )}

            <p className="mb-5 text-sm font-medium">
              By continuing, you confirm that you’re the owner or primary user
              of this mobile phone number. You agree to receive automated texts
              to confirm your phone number. Message and data rates may apply.
            </p>
            <div>
              <Button type="submit" text="Next" className="pb-3 pt-3 max-w-[300px]"/>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      <CFooter />
    </div>
  );
}

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #E5E7EB", // Remove the default border
    boxShadow: state.isFocused ? "0 0 0 1px #3B82F6" : null, // Add focus border
    "&:hover": {
      borderColor: "#3B82F6", // Change border color on hover
    },
  }),
  indicatorSeparator: () => ({
    display: "none", // Hide the indicator separator
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none", // Hide the dropdown indicator arrow
  }),
};
