import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";
import Button from "../../../../component/button/Button";
import { nigeriaStates } from "../../../../data/nigeriaStates";
import { toast } from "react-hot-toast";

export default function EditAddress() {
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [yourCity, setYourCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedState, setSelectedState] = useState(nigeriaStates[1]);

  const [addressOneError, setAddressOneError] = useState("");
  const [yourCityError, setYourCityError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (addressOne.trim() === "") {
      errors.addressOne = "Your address is required.";
    }

    if (yourCity.trim() === "") {
      errors.yourCity = "Your city is required";
    }

    if (postalCode.trim() === "") {
      errors.postalCode = "Your postal code is required";
    }

    setAddressOneError(errors.addressOne || "");
    setYourCityError(errors.yourCity || "");
    setPostalCodeError(errors.postalCode || "");

    if (Object.keys(errors).length === 0) {
      navigate("");
      toast.success(
        <div className="p-4 pt-2 pb-2">Address updated successfully!</div>
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
          <div className="text-center text-3xl mb-12">Change your address</div>

          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <FloatingLabelInput
                label="Address line 1"
                type="text"
                value={addressOne}
                onChange={(e) => setAddressOne(e.target.value)}
              />
              {addressOneError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {addressOneError}
                </p>
              )}
            </div>

            <div className="mt-3">
              <FloatingLabelInput
                label="Address line 2"
                type="text"
                value={addressTwo}
                onChange={(e) => setAddressTwo(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <FloatingLabelInput
                label="City"
                type="text"
                value={yourCity}
                onChange={(e) => setYourCity(e.target.value)}
                className="w-full"
              />
              {yourCityError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {yourCityError}
                </p>
              )}
            </div>
            <div className="mt-3">
              <FloatingLabelInput
                label="Postal code"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full"
              />
              {postalCodeError && (
                <p className="text-[#C40B0B] font-medium text-sm mt-1">
                  <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                  {postalCodeError}
                </p>
              )}
            </div>

            <div className="mt-3">
              <Listbox value={selectedState} onChange={setSelectedState}>
                <div className="relative">
                  <label
                    htmlFor="State/Capital"
                    className="absolute cursor-pointer text-[13px] font-medium text-gray-700 z-20 left-4 top-1"
                  >
                    State/Capital
                  </label>
                  <Listbox.Button className="relative cursor-pointer w-full p-4 pb-0 pt-5 h-[50px] border-[1px] border-neutral-500 rounded bg-white  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block text-base truncate">
                      {selectedState.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {nigeriaStates.map((yourState) => (
                        <Listbox.Option
                          key={yourState.id}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active ? "bg-[#ebebeb]" : "text-gray-900"
                            }`
                          }
                          value={yourState}
                        >
                          {({ selectedState }) => (
                            <>
                              <span
                                className={`block text-base truncate ${
                                  selectedState ? "font-medium" : "font-normal"
                                }`}
                              >
                                {yourState.label}
                              </span>
                              {selectedState ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#3B82F6]">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
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
