import { PiLaptopFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Payments() {

  return (
    <div className="mx-auto max-w-[700px] p-5 pt-10">
      <div>
        <div className="mb-10">
          <div className="max-w-[100px] mx-auto">
            <img src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693823916/Saturn/bwi1mrzjwtrpwpdorhva.svg" alt="" />
          </div>
          <div className="max-w-[200px] text-center text-4xl mb-5 font-semibold mx-auto">Payments</div>
          <div className="text-center">Choose a preferred way to pay, earn rewards, and do more.</div>
        </div>
        <div className="">
          <div className="text-2xl text-[#001435] mb-5 font-normal">
          Online purchases
          </div>

          <Link to="/dashboard/profile/choose-funding-source" className="border mb-6 flex w-full justify-between items-center p-5 pt-8 pb-8 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div><PiLaptopFill className="text-3xl text-[#142c8e]" /></div>
              <div className="text-left max-w-[550px]">
                <p className="text-lg text-[#001435]">Choose a funding source at checkout</p>
                <p className="text-lg text-[#0070E0] font-bold max-w-[500px]">
                Select
                </p>
              </div>
            </div>
          </Link>

        </div>

        {/* <div className="mt-10">
          <div className="text-2xl text-[#001435] mb-5 font-normal">
          Automatic payments
          </div>

          <div className="border mb-6 flex w-full justify-between items-center p-5 pt-8 pb-8 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer"
          onClick={openCloseAccountDeleteModal}
          >
            <div className="flex items-center gap-3">
              <div><HiOutlineRefresh className="text-3xl text-[#142c8e]" /></div>
              <div className="text-left max-w-[550px]">
                <p className="text-lg text-[#001435] mb-1">Automatic payments</p>
                <p className="text-sm text-[#001435] max-w-[500px]">
                View and update all your subscriptions and automatic payments.
                </p>
              </div>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
}
