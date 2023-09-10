import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../component/cFooter/CFooter";
import { useState } from "react";
import FloatingLabelInput from "../../component/input/FloatingLabelInput";
import Button from "../../component/button/Button";

export default function ForgottenEmail() {
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
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen relative p-3 pt-12 md:pt-20">
      <div className="">
        <div className="logo mb-5 flex items-center justify-center">
          <Link to="/">
            <div className="text-4xl font-bold text-[#00A9A4]">
              Saturn
            </div>
          </Link>
        </div>
        <p className="text-center max-w-[400px] mx-auto text-[#001435] text-2xl font-semibold">
          Forgot the email you use for PayPal?
        </p>
        <div className="mt-8 mx-auto max-w-[400px]">
          <p className="mb-5 font-medium text-sm text-left">
            Ente the addresses you may have used to create your PayPal account.
            We’ll check to find a match.
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

            <div className="mt-7 text-center">
              <Link
                to="/forgotten_password"
                className="font-semibold text-lg text-blue-500 hover:underline"
              >
                I&apos;ve remembered my email
              </Link>
            </div>
          </form>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
