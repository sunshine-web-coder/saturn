import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../component/button/Button";
import { toast } from "react-hot-toast";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);

  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    const validatePassword = (password) => {
      // Password must be at least 8 characters, contain a number,
      // a special character, and an uppercase letter.
      const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    };

    if (!currentPassword) {
      errors.currentPassword = "Please enter your current password";
    } else if (!validatePassword(currentPassword)) {
      errors.currentPassword =
        "Your current password don’t match. Please retype your current password to confirm it.";
    }

    if (!newPassword) {
      errors.newPassword = "Please enter your new password";
    } else if (!validatePassword(newPassword)) {
      errors.newPassword =
        "New password must be at least 8 characters, contain a number, a special character, and an uppercase letter";
    }

    if (!confirmNewPassword) {
      errors.confirmNewPassword = "Confirm your new password";
    } else if (newPassword !== confirmNewPassword) {
      errors.confirmNewPassword =
        "Your passwords don’t match. Please retype your password to confirm it.";
    }

    setCurrentPasswordError(errors.currentPassword || "");
    setNewPasswordError(errors.newPassword || "");
    setConfirmNewPasswordError(errors.confirmNewPassword || "");

    if (Object.keys(errors).length === 0) {
      navigate(""); // Navigate only if there are no errors
      toast.success(
        <div className="p-4 pt-2 pb-2">New Password updated successfully!</div>
      );
    }
  };

  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] mx-auto">
        <div>
          <Link to="/dashboard/profile/security"
              className="w-11 h-11 flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
            >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
        </div>
        <div className="mt-10 p-2">
          <div className="text-center text-3xl mb-12">
            Change your password
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="Confirm your current password">
                Confirm your current password
              </label>
              <div className="relative">
                <FloatingLabelInput
                  label="Current password"
                  type={currentPasswordVisible ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-3"
                />
                <button
                  type="button"
                  className="absolute cursor-pointer z-30 top-4 right-4"
                  onClick={() =>
                    setCurrentPasswordVisible(!currentPasswordVisible)
                  }
                >
                  <i
                    className={`fa-solid cursor-pointer ${
                      currentPasswordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
                {currentPasswordError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {currentPasswordError}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10">
              <label htmlFor="Confirm your current password">
                Enter your new password (Keep your account more secure.
                Don&apos;t use your name.)
              </label>
              <div className="relative">
                <FloatingLabelInput
                  label="New password"
                  type={passwordVisible ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-3"
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
                {newPasswordError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {newPasswordError}
                  </p>
                )}
              </div>
              <div className="relative">
                <FloatingLabelInput
                  label="Confirm new password"
                  type={passwordVisible ? "text" : "password"}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="mt-3"
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
                {confirmNewPasswordError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {confirmNewPasswordError}
                  </p>
                )}
              </div>
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
