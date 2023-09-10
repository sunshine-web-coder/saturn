import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../component/cFooter/CFooter";
import { useState } from "react";
import FloatingLabelInput from "../../component/input/FloatingLabelInput";
import Button from "../../component/button/Button";

export default function ForgottenPassword() {
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    setEmailError(errors.email || "");

    if (Object.keys(errors).length === 0) {
      navigate(""); // Navigate only if there are no errors
      alert("Successfully submitted!")
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen relative p-3 pt-12 md:pt-20">
      <div className="">
        <div className="logo mb-5 flex items-center justify-center">
          <Link to="/">
            <img
              className="w-8"
              src="https://i.ibb.co/mCHhPkS/Capture-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <p className="text-center max-w-[400px] mx-auto text-[#001435] text-2xl font-semibold">
          Need help with your password?
        </p>
        <div className="mt-8 mx-auto max-w-[400px]">
          <p className="mb-5 font-medium text-sm text-left">
            Enter the email you use for PayPal, and we’ll help you create a new
            password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div>
                <FloatingLabelInput
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-7">
              <Button
                type="submit"
                text="Next"
                className="pb-3 pt-3 max-w-[400px]"
              />
            </div>

            <div className="mt-5 text-center">
              <Link to="/forgotten_email" className="font-semibold text-lg text-blue-500 hover:underline">
                Forgot your email?
              </Link>
            </div>
            <div className="mt-7 text-center">
              <Link
                to="/signin"
                className="font-semibold text-lg text-blue-500 hover:underline"
              >
                Return to PayPal sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
