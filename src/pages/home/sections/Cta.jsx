import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="md:pt-[80px] border-b pt-[50px] md:pb-[80px] pb-[50px] bg-[#030734]">
      <div className="custom_container flex-col md:flex-row flex gap-5">
        <div className="w-full md:w-7/12">
          <h2 className="font-[Lora] text-center md:text-left font-bold text-2xl md:text-4xl text-white">
          Manage your money in style. Use the app.
          </h2>
        </div>
        <div className="w-full md:w-5/12">
            <div className="flex items-center justify-center md:justify-end gap-5">
                <Link to="" className="">
                    <img src="https://i.imgur.com/9Ya2gNU.png" alt="" />
                </Link>
                <Link to="" className="">
                    <img src="https://i.imgur.com/oMNFypU.png" alt="" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
