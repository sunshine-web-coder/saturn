import { Link } from "react-router-dom";
import { cFooterData } from "./cFooterData";

export default function CFooter() {
  return (
    <div className="w-full right-0 left-0">
      <div className="custom_container flex flex-wrap items-center md:items-left justify-left md:justify-center  gap-3">
        <span className="text-[#545d68] text-sm">©2023</span>
        <nav>
          <ul className="flex flex-wrap gap-3">
            {cFooterData.map((link, i) => (
              <li key={i}>
                <Link className="text-sm font-semibold underline" to={link.slug}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
