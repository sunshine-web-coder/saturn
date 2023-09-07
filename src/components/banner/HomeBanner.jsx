import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <div className="bg-[#EDF9F9] relative h-screen">
        <img className="absolute top-0 left-[50%]" src="https://i.imgur.com/OIq1cs7.png" alt="" />
        <img className="absolute top-[50%] left-0 translate-y-[-50%]" src="https://i.imgur.com/NitFxUX.png" alt="" />
        <div className="custom_container flex items-center gap-5 justify-between">
            <div className="border w-[50%]">
                <p className="text-[#00a9a4] mb-2 font-normal">Instant Money Transfer</p>
                <h1 className="text-black mb-5 text-5xl font-bold font-[Lora]">Transfer Money Across World In Real Time</h1>
                <p className="mb-9">Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.</p>
                <div>
                    <Link to="" className="block w-[150px] text-base font-normal text-center rounded text-white p-4 bg-[#00A9A4]">Get Started</Link>

                </div>
            </div>
            <div className="border hero-img w-[50%]">
                <img src="https://i.imgur.com/lbbCoph.png" alt="" />
            </div>
        </div>
    </div>
  )
}
