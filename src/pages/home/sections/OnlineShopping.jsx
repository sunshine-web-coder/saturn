import React from "react";
import { Link } from "react-router-dom";

export default function OnlineShopping() {
  return (
    <div className="md:pt-[80px] pt-[50px] md:pb-[80px] pb-[50px]">
      <div className="custom_container flex-col-reverse md:flex-row flex items-center gap-4 justify-between">
        <div className="w-full md:w-[50%]">
          <div>
            {/* <span className="text-lg text-[#00A9A4] font-medium">
              Online Shopping
            </span> */}
            <h2 className="mt-2 font-[Lora] text-black text-2xl md:text-4xl font-bold mb-3">
            Get more out of your money. Become a Saturnian.
            </h2>
            <p className="text-[#666666] text-base">
              We’ve made online payment and money management easier and better for you. Now, with one tap, you can do much more with your money, report taxes, and see your financial activities in real time.
            </p>
          </div>
          {/* <div className="mt-6">
            <ul className="text-[#030734] flex flex-col gap-4 text-lg font-medium">
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>Cards that work all across the world.</span></li>
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>Highest Returns on your investments.</span></li>
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>No ATM fees. No minimum balance. No overdrafts.</span></li>
            </ul>
          </div> */}
          <div className="mt-6">
            Ready to launch into space?
          </div>
          <div className="mt-8">
            <Link to="" className="block w-[200px] text-lg font-semibold text-center rounded-md text-white p-4 bg-[#00A9A4]">Steady your rocket</Link>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
            <img src="https://vue.hibootstrap.com/ruxa/img/shopping-1.917e9419.png" alt="" />
        </div>
      </div>
    </div>
  );
}
