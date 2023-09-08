import { Link } from "react-router-dom";
import "./banner.scss"

export default function HomeBanner() {
  return (
    <div className="bg-[#EDF9F9] pt-[20px] md:pt-[80px] banner pb-[80px] relative h-full">
        <img className="absolute top-0 hidden left-[50%]" src="https://i.imgur.com/OIq1cs7.png" alt="" />
        <img className="absolute top-[50%] left-0 translate-y-[-50%]" src="https://i.imgur.com/NitFxUX.png" alt="" />
        <img className="absolute bottom-0 right-0" src="https://i.imgur.com/j2wzWOp.png" alt="" />
        <img className="absolute bottom-[100px] left-[50%]" src="https://i.imgur.com/ovfp9O9.png" alt="" />
        <div className="custom_container flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="w-full md:w-[50%]">
                <p className="text-[#00a9a4] mb-2 font-normal">Instant Money Transfer</p>
                <h1 className="text-black mb-5 text-3xl md:text-5xl font-bold font-[Lora]">Transfer Money Across World In Real Time</h1>
                <p className="mb-9">Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.</p>
                <div>
                    <Link to="/signup" className="block w-[150px] text-base font-normal text-center rounded text-white p-4 bg-[#00A9A4]">Get Started</Link>
                </div>
            </div>
            <div className="hero-img w-full md:w-[50%]">
                <img src="https://i.imgur.com/lbbCoph.png" alt="" />
            </div>
        </div>
    </div>
  )
}
