import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import { Link } from "react-router-dom";


export default function DataPrivacy() {
  
  return (
    <div className="mx-auto max-w-[700px] p-5 pt-10">
      <div>
        <div className="">
          <div className="text-2xl text-[#001435] mb-5 font-normal">
            Manage your privacy settings
          </div>

          <Link to="/dashboard/profile/blocked-contact" className="border mb-6 flex w-full justify-between items-center p-5 pt-8 pb-8 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div><ImBlocked className="text-3xl text-[#142c8e]" /></div>
              <div className="text-left max-w-[550px]">
                <p className="text-lg text-[#001435] mb-1">Blocked contacts</p>
                <p className="text-sm text-[#001435] max-w-[500px]">
                Review and edit the people you previously blocked.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-20">
          <div className="text-2xl text-[#001435] mb-5 font-normal">
            Manage your data
          </div>

          <Link to="/dashboard/profile/close-account" className="border mb-6 flex w-full justify-between items-center p-5 pt-8 pb-8 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div><RiDeleteBin6Fill className="text-3xl text-[#142c8e]" /></div>
              <div className="text-left max-w-[550px]">
                <p className="text-lg text-[#001435] mb-1">Delete your data / close account</p>
                <p className="text-sm text-[#001435] max-w-[500px]">
                Ask us to delete your data. To do this, we&apos;ll also need to close your account.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
