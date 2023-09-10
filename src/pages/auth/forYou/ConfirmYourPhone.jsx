import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";
import OTPInputFields from "../../../component/OTP/OTPInputFields";
import LoadingSpinner from "../../../component/loadingSpinner/LoadingSpinner";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ConfirmYourPhone() {
  const [isLoading, setIsLoading] = useState(false);

  const numOTPFields = 6;

  const navigate = useNavigate();

  const handleSendCode = () => {
    setIsLoading(true);

    // Simulate loading for a few seconds and then close the spinner
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your confirmation code sent again!");
    }, 3000); // Change the delay to your desired duration
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-between h-screen relative p-3 md:p-6 pt-5">
      <div className="">
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
        <p className="text-center max-w-[400px] mx-auto text-[#001435] text-2xl sm:text-3xl font-semibold">
          Confirm your phone
        </p>
        <div className="mt-4 mx-auto max-w-[500px]">
          <p className="mb-5 font-semibold text-center">
            Code sent to +234 812 703 6094
          </p>
          <form className="mt-10">
            <OTPInputFields numFields={numOTPFields} />
            <div className="flex items-center">
              <button
                type="button"
                className="max-w-[100%] mx-auto text-[#003087] font-semibold hover:underline"
                onClick={handleSendCode}
              >
                Send code again
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      <CFooter />
    </div>
  );
}
