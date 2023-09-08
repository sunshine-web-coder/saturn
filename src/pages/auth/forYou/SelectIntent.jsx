import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CFooter from "../../../component/cFooter/CFooter";

export default function SelectIntent() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };
  
  const navigateToAnotherRoute = () => {
    navigate("/signup/link_your_card");
  };


  return (
    <div className="flex flex-col justify-between h-screen relative pt-5">
      <div className="mb-24">
        <div className="logo max-w-[800px] mx-auto mb-7 flex items-center justify-between">
          <button
            type="button"
            onClick={navigateBack}
            className="w-11 h-11 text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </button>
          <Link to="/">
            <img
              className="w-6"
              src="https://i.ibb.co/mCHhPkS/Capture-removebg-preview.png"
              alt=""
            />
          </Link>
          <div></div>
        </div>
        <p className="text-center max-w-[500px] mx-auto text-[#001435] text-3xl font-semibold">
          What do you want to try first?
        </p>
        <p className="mb-5 mt-4 font-semibold text-center">
          Join over 400 million people using PayPal globally.
        </p>
        <div className="mx-auto max-w-[500px]">
          <div className="flex flex-col gap-5">
            <div onClick={navigateToAnotherRoute} className="p-5 pt-10 pb-10 pr-10 flex gap-5 shadow justify-between cursor-pointer border h-full rounded-[13px]">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full">
                  <i className="fa-solid text-lg text-[#4c7bd1] fa-bag-shopping"></i>
                </div>
                <div>
                  <p className="text-2xl font-semibold mb-3">Shop</p>
                  <p className="text-lg font-medium text-[#727272] w-64">
                    Check out on millions of websites by adding a card.
                  </p>
                </div>
              </div>
              <div>
                <i className="fa-solid text-2xl text-[#4c7bd1] fa-arrow-right-long"></i>
              </div>
            </div>
            <div className="p-5 pt-10 pb-10 pr-10 flex gap-5 shadow justify-between cursor-pointer border h-full rounded-[13px]">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full">
                  <img
                    className="w-6"
                    src="https://i.imgur.com/1Ei6w2B.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold mb-3">Send money</p>
                  <p className="text-lg font-medium text-[#727272] w-64">
                    Get your money where it needs to go. Every time. For every
                    moment.
                  </p>
                </div>
              </div>
              <div>
                <i className="fa-solid text-2xl text-[#4c7bd1] fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <p className="mt-8 cursor-pointer font-semibold text-[#4c7bd1] text-[18px] text-center">
            Not now
          </p>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
