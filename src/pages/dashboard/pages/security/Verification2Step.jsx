import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Tooltip } from "antd";
import Button from "../../../../component/button/Button";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";

export default function Verification2Step() {
  const [selectedRadio, setSelectedRadio] = useState("featured-1"); // Initialize with the default value
  const [authenticationCode, setAuthenticationCode] = useState("");

  const [authenticationCodeError, setAuthenticationCodeError] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    // Add your logic here to handle the "Set It Up" button click

    if (selectedRadio === "featured-1") {
      // Show the feature_one container div
      // You can add your logic here to show/hide the div as needed
      document.querySelector(".feature_one").style.display = "block";
      document.querySelector(".toggle_back").style.display = "block";
      document.querySelector(".protect_y_a").style.display = "none";
      document.querySelector(".navigateBackBtn").style.display = "none";
    } else {
      // Hide the feature_one container div
      document.querySelector(".feature_one").style.display = "block";
    }
  };

  const handleToggleBack = () => {
    if (selectedRadio === "featured-1") {
      document.querySelector(".protect_y_a").style.display = "block";
      document.querySelector(".toggle_back").style.display = "none";
      document.querySelector(".feature_one").style.display = "none";
      document.querySelector(".navigateBackBtn").style.display = "block";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!authenticationCode) {
      errors.authenticationCode = "Code is required.";
    }

    setAuthenticationCodeError(errors.authenticationCode || "");

    if (Object.keys(errors).length === 0) {
      navigate(""); // Navigate only if there are no errors
      toast.success(
        <div className="p-4 pt-2 pb-2">
          You&apos;ve successfully set up your security questions.
        </div>
      );
      // closeModal();
    }
  };
  
  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] t2_step_protection mx-auto">
        <div>
          <Link to="/dashboard/profile/security"
            className="w-11 h-11 navigateBackBtn flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
          <button
            type="button"
            onClick={handleToggleBack}
            className="w-11 h-11 toggle_back text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </button>
        </div>
        <div className="mt-10 p-5 pt-2">
          <div className="protect_y_a">
            <div className="text-2xl mb-3 text-[#2C2E2F] text-center font-light">
              Protect your account with 2-step verification
            </div>
            <div className="text-sm text-center text-[#2C2E2F]">
              Each time you log in, you’ll use a one-time code in addition to
              your password. Choose how you’ll get your code.
            </div>
            <Tooltip
              placement="bottom"
              overlayInnerStyle={{
                backgroundColor: "#3A3B3C",
                padding: 20,
                width: "300px",
              }}
              title={
                <div>
                  <p>
                    It&apos;s easy to download an authenticator app, which will
                    generate a one-time security code that you can use to sign
                    in along with your password each time you log in. Don&apos;t
                    worry - these app providers will not have access to your
                    PayPal account info.
                    <br />
                    <br />
                    To download an app, got to your phone&apos;s app store,
                    search for &quot;authenticator app&quot; and download one
                    such as Google Authenticator or Microsoft Authenticator.
                  </p>
                </div>
              }
            >
              <div className="mt-3 text-center">
                <span className="text-sm border-dashed text-[#009cde] cursor-pointer border-b-2">
                  Need an authenticator app?
                </span>
              </div>
            </Tooltip>

            <div className="mt-4">
              <hr className="border-dashed border-1 border-gray-300" />
            </div>

            <div className="mt-4">
              <div className="custom_radio">
                <div>
                  <input
                    type="radio"
                    id="featured-1"
                    name="featured"
                    defaultChecked={selectedRadio === "featured-1"}
                    onChange={() => setSelectedRadio("featured-1")}
                  />
                  <label htmlFor="featured-1">
                    <span className="ml-2 text-sm">
                      Use an authenticator app
                    </span>
                  </label>
                </div>

                {/* <div className="mt-4">
                            <input
                              type="radio"
                              id="featured-2"
                              name="featured"
                            />
                            <label htmlFor="featured-2">
                              <span className="ml-2 text-sm">
                                Use a security key
                              </span>
                            </label>
                          </div> */}
              </div>
            </div>

            <div className="mt-10 max-w-[250px] mx-auto">
              <Button
                type="button"
                text="Set It Up"
                className="w-full bg-[#0070BA] hover:bg-[#003C90] pb-3 pt-3"
                onClick={handleToggle}
              />
            </div>
          </div>
          <div className="feature_one">
            <div className="text-2xl mb-3 text-[#2C2E2F] text-center font-light">
              Get codes from an authenticator app
            </div>
            <div className="text-sm text-center text-[#2C2E2F]">
              Each time you log in, in addition to your password, you’ll use an
              authenticator app to generate a one-time code.
            </div>
            <div className="mt-7">
              <div className="flex gap-2">
                <p>Step&nbsp;1:</p>
                <p>
                  Scan the QR code below or manually type the secret key into
                  your authenticator app.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2 items-center justify-center">
                <div className="w-[100px mx-auto]">
                  <img
                    className=""
                    src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693755893/Saturn/ueeqxhf3saadhuifmfx0.png"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <span className="text-[12px]">PDFT EQRL 3AGP 5AP5</span>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <hr className="border-dashed border-1 border-gray-300" />
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <FloatingLabelInput
                    label="Authentication code"
                    type="text"
                    pattern="[0-9]*"
                    value={authenticationCode}
                    onChange={(e) => setAuthenticationCode(e.target.value)}
                  />
                  {authenticationCodeError && (
                    <p className="text-[#C40B0B] font-medium text-sm mt-2 mb-1">
                      <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                      {authenticationCodeError}
                    </p>
                  )}
                </div>
                <div className="mt-4 max-w-[250px] mx-auto">
                  <Button
                    type="submit"
                    text="Confirm"
                    className="w-full bg-[#0070BA] hover:bg-[#003C90] pb-3 pt-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
