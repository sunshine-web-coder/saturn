import { Link } from "react-router-dom";
import "./Sections.scss"
import { ourServicesData } from "./data";

export default function OurServices() {
  return (
    <div className="pt-[80px] our_services pb-[80px] bg-[#030734]">
      <div className="custom_container our_services_in">
        <div className="text-center">
            <span className="text-base font-medium text-[#00A9A4]">Our Services</span>
            <h2 className="text-white font-[Lora] font-bold mt-[10px] text-5xl">Get Your Ruxa online Banking</h2>
        </div>
        <div>
            <div className="mt-[40px] our_services_grid">
            <img className="service-shape-one" src="https://i.imgur.com/rYz17CL.png" alt="" />
            <img className="service-shape-two" src="https://i.imgur.com/tef4DrY.png" alt="" />
                {ourServicesData.map((ourServices, i) => (
                <div className="w-[100%] flex flex-[0_0_auto] bg-[#161942] p-6 our_service_m rounded-xl" key={i}>
                    <div className="service_icon flex items-center justify-center">
                        <img src={ourServices.img} alt="" />
                    </div>
                    <div className="ml-[25px]">
                        <h3 className="text-xl font-[Lora] text-white font-bold mb-[12px]">{ourServices.title}</h3>
                        <p className="text-base text-[hsla(0,0%,100%,.8)]">
                            {ourServices.text}
                        </p>
                    </div>
                </div>   
                ))}
            </div>
            <div className="mt-10 flex items-center justify-center">
                <Link to="" className="block w-[150px] text-base font-normal text-center rounded text-white p-4 bg-[#00A9A4]">View All Services</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
