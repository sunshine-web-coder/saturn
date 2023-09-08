import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Button from "../../../../component/button/Button";
import { toast } from "react-hot-toast";

export default function ChangeNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      <div className="p-4 pt-2 pb-2">Phone number updated successfully!</div>
    );
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
          <div className="text-center text-3xl mb-12">
            Change your phone number
          </div>

          <form onSubmit={handleSubmit}>
            <div className="">
              <PhoneInput
                defaultCountry="ua"
                value={phoneNumber}
                onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                className="w-full"
              />
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
