import { Link, useNavigate } from "react-router-dom";
import CFooter from "../../component/cFooter/CFooter";
import { useState } from "react";
import FloatingLabelInput from "../../component/input/FloatingLabelInput";
import Button from "../../component/button/Button";
import { Divider } from 'antd';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

    if (!password) {
      errors.password = "Password is required.";
    }

    setEmailError(errors.email || "");
    setPasswordError(errors.password || "");

    if (Object.keys(errors).length === 0) {
      navigate("/signup/select_intent"); // Navigate only if there are no errors
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen relative p-3 pt-24 md:pt-[100px]">
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
        <div className="mt-8 mx-auto max-w-[350px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div>
                <FloatingLabelInput
                  label="Email or mobile number"
                  type="text"
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

              <div className="relative">
                <FloatingLabelInput
                  label="Enter your password"
                  type={passwordVisible ? "text" : "password"} // Use the state to toggle password visibility
                  value={password}
                  className="pr-12"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute cursor-pointer z-30 top-4 right-4"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <i
                    className={`fa-solid cursor-pointer ${
                      passwordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
                {passwordError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <Link
                to="/forgotten_password"
                className="font-semibold text-lg text-blue-500 hover:underline"
              >
                Forgotten password?
              </Link>
            </div>

            <div className="mt-7">
              <Button
                type="submit"
                text="Next"
                className="pb-3 pt-3 max-w-[400px]"
              />
            </div>
          </form>
          <div>
          <Divider plain><span className="text-[#6c7378] text-sm font-semibold">Or</span></Divider>
          </div>
          <div className="mt-5">
            <Link
              to="/signup"
              className="font-semibold block w-full border border-[#142C8E] p-5 pb-2 pt-2 text-center shadow-sm rounded-full text-lg text-[#142C8E]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
