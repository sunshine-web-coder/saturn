import { Link, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";

export default function Header() {
  const location = useLocation();
  return (
    <div className="bg-white w-full pt-[90px] z-10">
      <div className="flex items-center justify-center max-w-[750px] h-[95px] mx-auto">
        <nav className="w-full">
          <ul className="flex pb-2 pt-2 justify-between font-semibold text-lg gap-3 max-w-[100%] md:w-full border-b md:border-0 overflow-scroll md:overflow-hidden">
            {NavLink.map((links, i) => (
              <li key={i}>
                <Link
                  to={links.slug}
                  className={`block whitespace-nowrap p-4 pb-2 pt-2 text-[#1072eb] border border-[#ffffff] hover:border hover:border-[#c2c2c2] transition-all rounded-full ${
                    location.pathname === links.slug ? "bg-[#EDF9FF]" : ""
                  }`}
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
