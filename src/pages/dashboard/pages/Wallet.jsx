import { Link } from "react-router-dom";

export default function Wallet() {
  return (
    <div className={`w-full pt-[100px] p-4 pb-0 h-[700px]`}>
      <div className="max-w-[1000px] mx-auto">
        <div className="max-w-[500px] text-center mx-auto mt-10">
          <div className="max-w-full mb-8 flex items-center justify-center">
            <img
              className="max-w-[250px]"
              src="https://www.paypalobjects.com/paypal-ui/illustrations/focused/svg/empty-state-add-fi.svg"
              alt=""
            />
          </div>
          <div className="mb-8">
            <h2 className="font-normal text-4xl text-[#0c0c0d] mb-4">Link a new card</h2>
            <p className="text-lg text-[#0c0c0d] font-normal">
              Join the millions of customers who use PayPal to pay for everyday
              purchases any time, any day, anywhere.
            </p>
          </div>
          <div>
            <Link to="/dashboard/link_your_card" className="border p-[0.625rem] pl-[1.875rem] pr-[1.875rem] transition-all rounded-full hover:bg-[#003c90e5] bg-[#142c8e] text-white">Lin a card</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
