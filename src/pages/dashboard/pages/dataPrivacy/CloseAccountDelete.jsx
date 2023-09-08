import { Link } from "react-router-dom";
import Button from "../../../../component/button/Button";
import { RiQuestionnaireFill } from "react-icons/ri";

export default function CloseAccountDelete() {
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
          <div className="text-center text-3xl mb-5">
            Ask us to delete your data and close this account
          </div>
          <div className="text-base text-center text-[#2C2E2F] mb-10">
            We use your data to provide services, so if we delete your data, we
            also need to close your account.
          </div>
          <div className="mt-5 mb-5">
            <hr className="border-dashed border-[#afafaf]" />
          </div>
          <div className="p-5">
            <div className="text-[#001435] text-lg font-bold">
              Before you continue:
            </div>
            <div className="ml-10 mt-5">
              <ul className="list-disc flex flex-col gap-3">
                <li>
                  If your account is limited, go to the Resolution Center,
                  select Go to Account Limitations, then click Resolve.
                </li>
                <li>
                  Make sure any outstanding payments have cleared. We won&apos;t
                  be able to close your account until they do.
                </li>
                <li>Transfer your PayPal balance to your bank.</li>
                <li>
                  If you have a negative balance, click the &quot;Resolve your
                  negative balance&quot; link next to your PayPal balance.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <hr className="border-dashed border-[#afafaf]" />
          </div>
          <div className="border p-5 mt-4 rounded-xl bg-[#f5f7fa] shadow-sm">
            <p className="text-lg">
              Once your account&apos;s clear, and if you&apos;re eligible,
              we&apos;ll close your account and delete your data. We need to
              retain some of your data for legal and regulatory reasons. To
              learn more, see our{" "}
              <Link to="" className="font-bold text-[#0070E0]">
                privacy statement
              </Link>
              .
              <br />
              <br />
              We&apos;ll email you to let you know the status, and if there are
              any other steps you need to take.
            </p>
          </div>
          <div className="text-lg flex items-center gap-2 mt-4">
            <RiQuestionnaireFill className="text-2xl text-[#001435]" />{" "}
            <p>
              Have more questions about data deletion?{" "}
              <Link to="" className="font-bold text-[#0070E0]">
                Contact us
              </Link>
            </p>
          </div>
          <div className="mt-5 mb-5">
            <hr className="border-dashed border-[#afafaf]" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounde"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-lg leading-6 cursor-pointer font-medium text-[#001435]"
              >
                I understand that account deletion is permanent and can&apos;t
                be reversed.
              </label>
            </div>
          </div>
          <div className="mt-4 text-[#001435] text-lg font-bold">
            Are you sure you want to close your account?
          </div>
          <div className="p-4 pl-0 max-w-[300px]">
            <Button text="Yes, continue" className="p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
