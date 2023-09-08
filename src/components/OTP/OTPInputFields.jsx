import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const OTPInputFields = ({ numFields }) => {
  const [otp, setOTP] = useState(Array(numFields).fill(""));
  const inputRefs = useRef(Array(numFields).fill(null));
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleInputChange = (index, value) => {
    // Only update state if the input is a number
    if (/^[0-9]*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move focus to the next input field if there's a value
      if (value && index < numFields - 1) {
        inputRefs.current[index + 1].focus();
      }

      // Move focus to the previous input field on backspace
      if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      // Check if entered OTP matches the testing OTP
      const enteredOTP = newOTP.join(""); // Combine OTP digits
      if (enteredOTP === "123456") {
        setIsLoading(true); // Show loader
        setTimeout(() => {
          setIsLoading(false); // Hide loader after a delay
          navigate("/signup/email_password");
        }, 3000); // Delay for showing loader (adjust as needed)
      }
    }
  };

  useEffect(() => {
    // Clear OTP and loader state when component unmounts
    return () => {
      setOTP(Array(numFields).fill(""));
      setIsLoading(false);
    };
  }, [numFields]);

  return (
    <div className="flex gap-3 mb-10 items-center justify-center">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          className="border border-black confirm_phone_number rounded font-semibold shadow-lg outline-sky-600 text-3xl max-w-[45px] md:max-w-[60px] h-[50px] md:h-[70px] text-center p-3"
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !value && index > 0) {
              inputRefs.current[index - 1].focus();
            }
          }}
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default OTPInputFields;
