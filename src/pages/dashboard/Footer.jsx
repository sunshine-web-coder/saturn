import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full shadow-sm border p-4 bg-[#fffff]">
      <div className="max-w-[1150px] mx-auto">
        <div className="flex flex-wrap gap-5 items-center pb-5 pt-5">
          <div className="text-3xl font-bold text-[#142C8E]">
                Saturn
            </div>
          <nav className="">
            <ul className="flex text-[#0c0c0d] text-lg gap-7">
                <li><Link to="" className="hover:underline">Help</Link></li>
                <li><Link to="" className="hover:underline">Contact Us</Link></li>
                <li><Link to="" className="hover:underline">Security</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5 flex-wrap pb-5 pt-5">
          <p className="text-sm text-[#757676]">©2023 Saturn. All rights reserved.</p>
          <nav className="">
            <ul className="flex text-[#0c0c0d] text-sm gap-7">
                <li><Link to="" className="hover:underline">Privacy</Link></li>
                <li><Link to="" className="hover:underline">Cookies</Link></li>
                <li><Link to="" className="hover:underline">Legal</Link></li>
            </ul>
          </nav>
        </div>
        {/* <div className="flex items-center pb-5 pt-5">
          <p className="text-sm text-[#757676]">PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as a Major Payment Institution under the Payment Services Act 2019.</p>
        </div> */}
      </div>
    </div>
  );
}
