import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../../component/cFooter/CFooter";
import FloatingLabelInput from "../../../component/input/FloatingLabelInput";
import { useState } from "react";
import Button from "../../../component/button/Button";

export default function EmailPassword() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    const validatePassword = (password) => {
      // Password must be at least 8 characters, contain a number,
      // a special character, and an uppercase letter.
      const passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };



    if (email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (firstName.trim() === "") {
      errors.firstName = "First name is required.";
    } else if (!/^[A-Za-z]*$/.test(firstName)) {
      errors.firstName = "First name should only contain letters.";
    }

    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]*$/.test(lastName)) {
      errors.lastName = "Last name should only contain letters.";
    }

    if (!password) {
      errors.password = "We need a password to create an account for you.";
    } else if (!validatePassword(password)) {
      errors.password =
        "Password must be at least 8 characters, contain a number, a special character, and an uppercase letter";
    }

    // If all fields are valid, navigate to the next page
    setEmailError(errors.email || "");
    setFirstNameError(errors.firstName || "");
    setLastNameError(errors.lastName || "");
    setPasswordError(errors.password || "");
    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      navigate("/signup/name_address"); // Navigate only if there are no errors
    }
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
            <img
              className="w-6"
              src="https://i.ibb.co/mCHhPkS/Capture-removebg-preview.png"
              alt=""
            />
          </Link>
          <div></div>
        </div>
        <p className="text-center max-w-[400px] mx-auto text-[#001435] text-3xl font-semibold">
          Set up your profile
        </p>
        <div className="mt-4 mx-auto max-w-[500px]">
          <p className="mb-5 font-semibold text-center">This info needs to be accurate</p>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            <div>
              <FloatingLabelInput
                label="Email Address"
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
            <div>
              <FloatingLabelInput
                label="First name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {firstNameError}
                </p>
              )}
            </div>
            <div>
              <FloatingLabelInput
                label="Last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {lastNameError}
                </p>
              )}
            </div>
            <div className="relative">
              <FloatingLabelInput
                label="Create your password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                className="pr-12"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute cursor-pointer z-30 top-3 right-4"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
            <i className={`fa-solid cursor-pointer ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
              {passwordError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {passwordError}
                </p>
              )}
            </div>

              <div>
                <Button type="submit" text="Next" className="pb-3 pt-3 max-w-[300px]"/>
              </div>
          </form>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
