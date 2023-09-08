import React from "react";
import { TbChecks } from 'react-icons/tb';
import { Link } from "react-router-dom";

export default function OnlineShopping() {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="custom_container flex-col-reverse md:flex-row flex items-center gap-4 justify-between">
        <div className="w-full md:w-[50%]">
          <div>
            <span className="text-lg text-[#00A9A4] font-medium">
              Online Shopping
            </span>
            <h2 className="mt-2 font-[Lora] text-black text-2xl md:text-4xl font-bold mb-3">
            Shop Online Make In Online Banking Payments
            </h2>
            <p className="text-[#666666] text-base">
              There are many variations of passages of Lorem Ipsum amet avoilble
              but majority have suffered alteration in some form, by injected
              humur or randomise words which don't sure amet sit dolor quras
              alto lorem.
            </p>
          </div>
          <div className="mt-6">
            <ul className="text-[#030734] flex flex-col gap-4 text-lg font-medium">
                <li className="flex gap-3 items-center"><TbChecks className="text-[#00A9A4]" /><span>Cards that work all across the world.</span></li>
                <li className="flex gap-3 items-center"><TbChecks className="text-[#00A9A4]" /><span>Highest Returns on your investments.</span></li>
                <li className="flex gap-3 items-center"><TbChecks className="text-[#00A9A4]" /><span>No ATM fees. No minimum balance. No overdrafts.</span></li>
            </ul>
          </div>
          <div className="mt-8">
            <Link to="" className="block w-[180px] text-base font-normal text-center rounded-md text-white p-4 bg-[#00A9A4]">Get Started</Link>
          </div>
        </div>
        <div className="w-fulll md:w-[50%]">
            <img src="https://vue.hibootstrap.com/ruxa/img/shopping-1.917e9419.png" alt="" />
        </div>
      </div>
    </div>
  );
}
