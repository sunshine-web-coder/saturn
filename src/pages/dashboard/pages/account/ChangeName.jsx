import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";
import Button from "../../../../component/button/Button";
import { toast } from "react-hot-toast";

export default function ChangeName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

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

    setFirstNameError(errors.firstName || "");
    setLastNameError(errors.lastName || "");

    if (Object.keys(errors).length === 0) {
      navigate(""); // Navigate only if there are no errors
      toast.success(
        <div className="p-4 pt-2 pb-2">Name updated successfully!</div>
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
          <div className="text-center text-3xl mb-12">Change your name</div>

          <form onSubmit={handleSubmit}>
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
            <div className="mt-4">
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
