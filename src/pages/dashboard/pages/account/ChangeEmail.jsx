import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";
import Button from "../../../../component/button/Button";
import { toast } from "react-hot-toast";

export default function ChangeEmail() {
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
      toast.success(
        <div className="p-4 pt-2 pb-2">Email updated successfully!</div>
      );
    }
  };

  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] mx-auto">
        <div>
          <Link
            to="/dashboard/profile"
            className="w-11 h-11 flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
        </div>
        <div className="mt-10 p-2">
          <div className="text-center text-3xl mb-12">Change your email</div>

          <form onSubmit={handleSubmit}>
            <div className="">
              <FloatingLabelInput
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2"
              />
              {emailError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {emailError}
                </p>
              )}
            </div>
            <div className="mt-10 max-w-[300px] mx-auto">
              <Button
                type="submit"
                text="Update"
                className="w-full bg-[#0070BA] hover:bg-[#003C90] pb-3 pt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
