import React from "react";
import { Select, Divider } from "antd";
import "./Sections.scss";
import { Link } from "react-router-dom";

const options = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "EURO",
    label: "EURO",
  },
];

export default function ChargeForm() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-[80px] pb-[80px] bg-[#010647]">
      <div className="custom_container">
        <form
          className="charge_form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row relative gap-6 items-center">
            <div className="flex flex-col w-full md:w-1/3 gap-3">
              <label htmlFor="Your send money" className="text-base text-[hsla(0,0%,100%,.8)]">
                You Send Money
              </label>
              <div className="relative flex w-full">
                <input
                  type="number"
                  className="p-4 rounded-md bg-[#282b58] pr-[90px] border-0 outline-none w-full"
                  placeholder="$1000"
                />
                <Select
                  defaultValue="USD"
                  onChange={handleChange}
                  options={options}
                  className="absolute right-0"
                />
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/3 gap-3">
              <label htmlFor="Your send money" className="text-base text-[hsla(0,0%,100%,.8)]">
              Recipient Gets
              </label>
              <div className="relative flex w-full">
                <input
                  type="number"
                  className="p-4 rounded-md bg-[#282b58] pr-[90px] border-0 outline-none w-full"
                  placeholder="$1000"
                />
                <Select
                  defaultValue="USD"
                  onChange={handleChange}
                  options={options}
                  className="absolute right-0"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 mt-9">
              <button type="submit" className="text-base w-full block font-normal rounded text-white p-4 bg-[#00A9A4]">
                Get Estimation
              </button>
            </div>
          </div>

          <div className="flex gap-2 items-center text-base mt-5 text-[hsla(0,0%,100%,.8)]">
            <p>
              <span className="font-semibold text-white">82.50</span> Exchange
              Rate <span className="font-semibold text-white">$5.50</span>{" "}
              Transition Fees
            </p>
            <Divider type="vertical" className="border-[hsla(0,0%,100%,.8)] h-3 relative top-[2px]" />
            <p>
              By clicking continue, I am agree with{" "}
              <Link to="/ruxa/terms-of-service" className="text-[#00A9A4]">
                Terms &amp; Policy
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
