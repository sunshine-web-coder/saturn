import { Language, TimeZone } from "./AccountOptionsSelect";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [previewImage, setPreviewImage] = useState(
    "https://i.imgur.com/mZcnWPP.png"
  ); // Initialize with the default image URL

  const fileInputRef = useRef(null);

  const openAlert = () => {
    // Open the modal for changing name
    toast.success(
      <div className="p-4 pt-2 pb-2">
        A confirmation message is on the way. Be sure to check abcdef@gmail.com
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if no image is uploaded
    if (!previewImage || previewImage === "https://i.imgur.com/mZcnWPP.png") {
      // Display an error message using toast
      toast.error("Please upload an image.");
      return; // Prevent further processing if no image is uploaded
    }
    toast.success("Profile image uploaded successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${previewImage})`,
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 pt-10">
      <div className="w-full">
        <div className="bg-white border rounded-xl relative">
          <div className="h-[140px] rounded-t-xl bg-[#142c8e]">
            <div className="flex rounded-t-xl p-6 pb-4 text-2xl text-white pt-4 justify-between items-center">
              <div className="">Profile</div>
              <div className="text-sm">Joined in 2023</div>
            </div>
          </div>
          
          <form
            className="absolute bottom-[100px] flex items-center"
            onSubmit={handleSubmit}
          >
            <div className="pl-6 pr-6">
              <div
                className="relative flex flex-col justify-end thAvatar bg-no-repeat bg-cover bg-blue-950 shadow-md w-[100px] h-[100px] rounded-full"
                style={backgroundImageStyle}
              >
                <div className="upload-btn-wrapper absolute bottom-0 w-full">
                  <input
                    type="file"
                    name="myfile"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                  <button className="upload-btn text-white border-0 bg-black/60 w-full text-sm">
                    <i className="fa-solid fa-camera"></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="border border-[#142C8E] text-sm relative top-5 p-4 bg-[#142C8E] text-white rounded shadow-sm flex items-center justify-center h-4"
            >
              Upload
            </button>
          </form>

          <div className="h-[70px]"></div>
          <div className="p-6 rounded-b-xl">
            <div className="flex justify-between items-center">
              <div className="text-2xl text-[#0c0c0d]">Wed Dev</div>
              <Link
                to="/dashboard/profile/update-name"
                className="text-sm text-[#1072eb] font-medium"
              >
                Change name
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white mt-8 rounded-xl shadow-sm border p-6">
          <div className="mb-5 text-2xl text-[#0c0c0d]">Account Options</div>
          <div className="mb-4">
            <Language />
          </div>
          <div>
            <TimeZone />
          </div>
          <div className="mt-8">
            <p className="text-sm text-[#515354] mb-2">Nationality</p>
            <p className="text-lg text-[#0c0c0d]">Nigeria</p>
          </div>
          <div className="mt-8">
            <p className="text-sm text-[#515354] mb-2">Merchant ID</p>
            <p className="text-lg text-[#0c0c0d]">E86PCF8XDRBFS</p>
          </div>
          <div className="mt-8">
            <button className="border hover:shadow-sm p-3 rounded-xl w-full flex items-center gap-3 text-lg text-[#0c0c0d]">
              <img src="https://i.imgur.com/tupEda5.png" alt="" /> Close your
              account
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="min-h-[180px] p-6 pb-3 border rounded-xl bg-[#ffffff]">
          <div className="flex mb-5 text-2xl text-white justify-between items-center">
            <div className="text-[#0c0c0d]">Email</div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="text-[#791e06] p-2 pb-1 pt-1 rounded-full bg-[#fddbd3] text-sm">
              Unconfirmed
            </div>
            <button
              className="text-[#142c8e] p-2 pb-1 pt-1 rounded-full bg-[#d1f1ff] text-sm"
              onClick={openAlert}
            >
              Resend confirmation
            </button>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>testemail@gmail.com</div>
            <div>
              <Link
                to="/dashboard/profile/update-email"
                className="text-sm text-[#1072eb]"
              >
                Change email
              </Link>
            </div>
          </div>
        </div>

        <div className="min-h-[180px] p-6 pb-3 border rounded-xl bg-[#ffffff] mt-7">
          <div className="flex mb-5 text-2xl text-white justify-between items-center">
            <div className="text-[#0c0c0d]">Phone Number</div>
          </div>
          <div className="text-sm text-[#515354] flex justify-between items-center mt-5 mb-4">
            <p className="text-lg text-[#0c0c0d]">08087556094</p>
            <Link
              to="/dashboard/profile/update-number"
              className="text-sm text-[#1072eb]"
            >
              Change phone number
            </Link>
          </div>
        </div>

        <div className="min-h-[180px] p-6 pb-3 border rounded-xl bg-[#ffffff] mt-7">
          <div className="flex mb-5 text-2xl text-white justify-between items-center">
            <div className="text-[#0c0c0d]">Address</div>
          </div>
          <div className="text-sm text-[#515354] flex justify-between mt-5 mb-4">
            <p className="text-lg text-[#0c0c0d]">
              Opposite quality barber, agbowo <br />
              Ibadan <br /> OYO STATE 121101
            </p>
            <Link
              to="/dashboard/profile/update-address"
              className="text-sm text-[#1072eb]"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
