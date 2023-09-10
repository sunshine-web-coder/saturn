import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Button from "../../../component/button/Button";
import LoadingSpinner from "../../../component/loadingSpinner/LoadingSpinner";

export default function AddMobile() {
  const [phoneError, setPhoneError] = useState("");
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
          <div></div>
          <Link to="/">
            <div className="text-4xl font-bold text-[#00A9A4]">
              Saturn
            </div>
          </Link>
          <Link to="/signin" className="text-[#3B82F6] text-lg font-semibold">
          Sign in
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
              defaultCountry="ng"
              forceDialCode={true}
              placeholder="Enter phone number"
              value={value}
              onChange={(newValue) => {
                console.log("Phone number value:", newValue);
                setValue(newValue);
              }}
              className="w-full shadow-sm rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
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
              <Button
                type="submit"
                text="Next"
                className="pb-3 pt-3 max-w-[300px]"
              />
            </div>
          </form>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      <CFooter />
    </div>
  );
}
