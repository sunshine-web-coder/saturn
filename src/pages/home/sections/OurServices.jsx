import { Link } from "react-router-dom";
import "./Sections.scss"
import { ourServicesData } from "./data";

export default function OurServices() {
  return (
    <div className="md:pt-[80px] pt-[50px] our_services md:pb-[80px] pb-[50px] bg-[#ffffff]">
      <div className="custom_container our_services_in">
        <div className="text-center">
            <span className="text-base font-medium text-[#00A9A4]">Our Services</span>
            <h2 className="text-black font-[Lora] font-bold mt-[10px] text-2xl md:text-4xl">Everything you need to stay ahead of the curve</h2>
        </div>
        <div>
            <div className="mt-[40px] our_services_grid">
            <img className="service-shape-one hidden" src="https://i.imgur.com/rYz17CL.png" alt="" />
            <img className="service-shape-two hidden" src="https://i.imgur.com/tef4DrY.png" alt="" />
                {ourServicesData.map((ourServices, i) => (
                <div className="w-[100%] border flex shadow-[0_0_25px_rgba(85,85,85,.1)] flex-col lg:flex-row flex-[0_0_auto] bg-[#ffffff] p-6 our_service_m rounded-xl" key={i}>
                    <div className="service_icon flex items-center justify-center">
                        <img className="max-w-[50px]" src={ourServices.img} alt="" />
                    </div>
                    <div className="ml-[25px] w-full service_text">
                        <h3 className="text-xl font-[Lora] text-black font-bold mb-[12px]">{ourServices.title}</h3>
                        <p className="text-base text-[#666666]">
                            {ourServices.text}
                        </p>
                        <div className="mt-3">
                          <Link to={ourServices.slug} className="text-[#00A9A4] text-base hover:underline">{ourServices.slugText}</Link>
                        </div>
                    </div>
                </div>   
                ))}
            </div>
            {/* <div className="mt-10 flex items-center justify-center">
                <Link to="" className="block w-[150px] text-base font-normal text-center rounded text-white p-4 bg-[#00A9A4]">View All Services</Link>
            </div> */}
        </div>
      </div>
    </div>
  );
}
