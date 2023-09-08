import React from "react";

export default function Footer() {
  return (
    <div className="md:pt-[80px] pt-[50px] md:pb-[80px] pb-[50px] bg-[#030734]">
      <div className="custom_container flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/6">
          <div><img src="https://i.imgur.com/xJ29aEg.png" alt="" /></div>
          <p className="text-[hsla(0,0%,100%,.8)] text-base mt-[27px] mb-[30px]"> On the other hand, we denounce whteous indig nation and dislike men wh beguiled moraized er hand consec teturus adipis iscing elit eiusmod tempordunt labore dolore magna aliqua consector tetur adip iscing. </p>
        </div>
        {/* <div className="w-full md:w-3/12"></div>
        <div className="w-full md:w-2/12"></div>
        <div className="w-full md:w-3/12"></div> */}
      </div>
    </div>
  );
}
