import React from "react";
import "./Sections.scss";
import { IoCheckbox } from 'react-icons/io5';

export default function GoalSetting() {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="custom_container why_choose_us flex-col md:flex-row flex gap-10 justify-between">
        <div className="w-full md:w-[50%] relative">
          <img className="max-w-full h-auto" src="https://vue.hibootstrap.com/ruxa/img/goal-1.dacf6f1b.jpg" alt=""/>
        </div>
        <div className="w-full md:w-[50%]">
          <div>
            <span className="text-lg text-[#00A9A4] font-medium">
              GoalSetting
            </span>
            <h2 className="mt-2 font-[Lora] text-black text-4xl font-bold mb-3">
              Manage Your Money With Online Banking Solution
            </h2>
            <p className="text-[#666666] text-base">
              There are many variations of passages of Lorem Ipsum amet avoilble
              but majority have suffered alteration in some form, by injected
              humur or randomise words which don't sure amet sit dolor quras
              alto lorem.
            </p>
          </div>
          <div className="mt-6">
            <ul className="text-[#030734] flex gap-5 flex-col">
              <li className="flex items-center gap-3 text-lg font-medium"><IoCheckbox className="text-[#00A9A4] text-3xl" /><span>Learn To Budget</span></li>
              <li className="flex items-center gap-3 text-lg font-medium"><IoCheckbox className="text-[#00A9A4] text-3xl" /><span>Create An Emergency Fund</span></li>
              <li className="flex items-center gap-3 text-lg font-medium"><IoCheckbox className="text-[#00A9A4] text-3xl" /><span>Get Out Of Debt</span></li>
              <li className="flex items-center gap-3 text-lg font-medium"><IoCheckbox className="text-[#00A9A4] text-3xl" /><span>Save And Invest Your Money</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
