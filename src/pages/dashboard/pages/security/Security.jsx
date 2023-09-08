import { RiLockPasswordLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Security() {

  return (
    <div className="max-w-[750px] mx-auto p-5 pt-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693718353/Saturn/tsplnwvinagmqmntcyiv.png"
          alt=""
        />
        <div className="text-5xl text-[#001435]">Security</div>
      </div>
      <div className="mt-14">
        <Link to="/dashboard/profile/change-password"
          className="border mb-6 flex w-full justify-between items-center p-4 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
          
        >
          <div className="flex gap-3">
            <div>
              <RiLockPasswordLine className="text-3xl text-[#142c8e]" />
            </div>
            <div className="text-left max-w-[550px]">
              <p className="text-lg text-[#001435] mb-1">Change password</p>
              <p className="text-sm text-[#001435]">
                Create or update your password
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="text-xl font-bold text-[#0070e0]">Update</button>
          </div>
        </Link>

        <Link to="/dashboard/profile/protect-your-account"
          className="border mb-6 flex w-full justify-between items-center p-4 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
        >
          <div className="flex gap-3">
            <div>
              <MdVerifiedUser className="text-3xl text-[#142c8e]" />
            </div>
            <div className="text-left max-w-[550px]">
              <p className="text-lg text-[#001435] mb-1">2-step verification</p>
              <p className="text-sm text-[#001435]">
                Add an extra layer of security to you account by using a
                one-time security code in addition to your password each time
                you log in.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="text-xl font-bold text-[#0070e0]">Set up</button>
          </div>
        </Link>

        <Link to="/dashboard/profile/security-question" className="border mb-6 flex w-full justify-between items-center p-4 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
        >
          <div className="flex gap-3">
            <div>
              <TbMessage2Question className="text-3xl text-[#142c8e]" />
            </div>
            <div className="text-left max-w-[550px]">
              <p className="text-lg text-[#001435] mb-1">Security questions</p>
              <p className="text-sm text-[#001435]">
                For your protection, please choose 2 security questions. This
                way, we can verify it&apos;s really you if there&apos;s ever a
                doubt.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="text-xl font-bold text-[#0070e0]">Create</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
