import React from "react";
import "./Sections.scss";
import { whyChooseUsData } from "./data";

export default function WhyChooseUs() {
  return (
    <div className="pt-[10px] md:pt-[80px] pb-[50px] md:pb-[80px]">
      <div className="custom_container why_choose_us flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full md:w-[50%] relative">
            <img className="max-w-full h-auto" src="https://vue.hibootstrap.com/ruxa/img/wh-img-1.f5b8c740.png" alt=""/>
          <img className="wh-shape-one" src="https://i.imgur.com/FmTb89h.png" alt=""/>
          <img className="wh-shape-two" src="https://i.imgur.com/4HTLL5c.png" alt=""/>
        </div>
        <div className="w-full md:w-[50%]">
          <div>
            <span className="text-base text-[#00A9A4] font-medium">
              Why Choose Us
            </span>
            <h2 className="mt-2 font-[Lora] text-black text-4xl font-bold mb-3">
              Get World Class & Fastest Online Payment Service
            </h2>
            <p className="text-[#666666] text-base">
              There are many variations of passages of Lorem Ipsum amet avoilble
              but majority have suffered alteration in some form, by injected
              humur or randomise words which don't sure amet sit dolor quras
              alto lorem.
            </p>
          </div>
          <div className="mt-6">
            {whyChooseUsData.map((whyChooseUs, i) => (
              <div className="flex gap-4 mb-6" key={i}>
                <div className="w-[150px]">
                  <img className="m-0" src={whyChooseUs.img} alt="" />
                </div>
                <div className="">
                  <h3 className="text-black font-[Lora] mb-[10px] text-xl font-bold">
                    {whyChooseUs.title}
                  </h3>
                  <p className="text-[#666666] text-base">
                   {whyChooseUs.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
