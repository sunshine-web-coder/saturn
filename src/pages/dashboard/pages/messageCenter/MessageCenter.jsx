import { Link } from "react-router-dom";

export default function MessageCenter() {
  return (
    <div className="h-full p-4 pb-20 pt-16 bg-[#ffffff]">
      <div className="max-w-[900px] mx-auto mt-20">
        <div className="">
          <div className="flex flex-wrap-reverse gap-2 justify-between items-center">
            <div className="text-2xl mb-5 sm:mb-0">Message</div>
            <div>
              Need help? <Link to="" className="text-lg text-[#0070E0]">Ask the PayPal Assistant</Link>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <img className="w-[200px]" src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693849399/Saturn/tw4xuzeqbmj4gc7laclh.png" alt="" />
            <p className="text-2xl">
              You&apos;re all set! <br /> No Messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
