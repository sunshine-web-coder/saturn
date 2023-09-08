import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="pt-[80px] pb-[80px] bg-[#030734]">
      <div className="custom_container flex-col md:flex-row flex gap-5">
        <div className="w-full md:w-7/12">
          <h2 className="font-[Lora] font-bold text-4xl text-white">
            You Can Find All Things You Need In Our App
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
