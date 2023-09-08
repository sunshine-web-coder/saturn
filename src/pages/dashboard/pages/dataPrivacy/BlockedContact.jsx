import { Link } from "react-router-dom";

export default function BlockedContact() {
  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] mx-auto">
        <div>
          <Link
            to="/dashboard/profile/privacy"
            className="w-11 h-11 flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
        </div>
        <div className="mt-10 p-2">
          <div className="text-center text-3xl mb-5">Blocked Contact</div>
          <div className="text-base text-center text-[#2C2E2F] mb-10">
            You have no blocked contact.
          </div>
        </div>
      </div>
    </div>
  );
}
