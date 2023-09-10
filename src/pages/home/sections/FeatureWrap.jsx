import "./Sections.scss";
import { featureWrapData } from "./data";

export default function FeatureWrap() {
  return (
    <div className="md:pt-[80px] bg-[#161942] pt-[50px] md:pb-[80px] pb-[50px]">
      <div className="custom_container">
        <div className="text-center mb-[40px]">
              <span className="text-base font-medium text-[#00A9A4]">Ready to level up your money management?</span>
              <h2 className="text-[hsla(0,0%,100%,.8)] font-[Lora] font-bold mt-[10px] text-2xl md:text-4xl">Follow these steps to get started</h2>
          </div>
        <div className="flex flex-col flex-wrap max-w-[900px] mx-auto md:flex-row gap-4 justify-between">
          {featureWrapData.map((feature) => (
            <div className="w-full md:w-[400px] p-[25px] featureWrap rounded-md shadow-[0_0_25px_rgba(85,85,85,.1)]" key={feature.id}>
              <div className="flex gap-3 mb-[18px]">
                <span className="p-2 font-bold text-[#00A9A4]">{feature.id}</span>
                <span className="featureWrapSpan p-3">
                  <img src={feature.img} alt="" />
                </span>
                <div className="w-[300px]">
                  <h3 className="text-xl text-[hsla(0,0%,100%,.8)] font-semibold">{feature.title}</h3>
                </div>
              </div>
              {/* <p className="text-[hsla(0,0%,100%,.8)] text-base">{feature.text}</p> */}
            </div>
          ))}
        </div> 
      </div>
       
    </div>
  );
}
