import "./Sections.scss";
import { featureWrapData } from "./data";

export default function FeatureWrap() {
  return (
    <div className="pt-[80px] pb-[80px]">
      <div className="custom_container flex flex-col md:flex-row gap-4 justify-between">
        {featureWrapData.map((feature, i) => (
          <div className="w-full md:w-1/3 p-[25px] featureWrap rounded-md shadow-[0_0_25px_rgba(85,85,85,.1)]" key={i}>
            <div className="flex items-center gap-3 mb-[18px]">
              <span className="featureWrapSpan p-3">
                <img src={feature.img} alt="" />
              </span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-[#666666] text-base">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
