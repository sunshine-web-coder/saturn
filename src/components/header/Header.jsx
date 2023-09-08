import { Link } from "react-router-dom";
import { NavLinkData } from "./data";
import { Divider } from 'antd';
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Header.scss"

export default function Header() {
  return (
    <div className="header">
      <div className="bg-[#030734] hidden md:block">
        <div className="custom_container flex items-center justify-between gap-5">
          <div className="flex gap-5">
            <div className="text-[hsla(0,0%,100%,.8)] text-sm flex gap-2">
              <span>
                <i className="fa-solid text-[#00a9a4] fa-phone"></i>
              </span>
              <span>(+024) 592 71 449</span>
            </div>
            <div className="text-[hsla(0,0%,100%,.8)] text-sm flex gap-2">
              <span>
                <i className="fa-solid text-[#00a9a4] fa-envelope"></i>
              </span>
              <span>hello@ruxa.com</span>
            </div>
            <div className="text-[hsla(0,0%,100%,.8)] text-sm flex gap-2">
              <span>
                <i className="fa-solid text-[#00a9a4] fa-location-dot"></i>
              </span>
              <span>St. Here Mandalay, New York, U.K</span>
            </div>
          </div>
          <div className="text-[hsla(0,0%,100%,.8)] flex items-center gap-4">
            <Link className="" to="">Support</Link>
            <Divider type="vertical" className="border-[hsla(0,0%,100%,.8)] h-3 relative top-[2px]" />
            <Link className="" to="">Help</Link>
            <Divider type="vertical" className="border-[hsla(0,0%,100%,.8)] h-3 relative top-[2px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF]">
        <div className="custom_container min-h-[90px] flex items-center justify-between">
          <div>
            <img src="https://i.imgur.com/GtKPy40.png" alt="" />
          </div>
            <nav className="navBar">
              <ul className="flex gap-8 items-center">
                {NavLinkData.map((links, i) => (
                  <li key={i}>
                    <Link
                      className="text-base text-[#030734] font-medium"
                      to={links.slug}
                    >
                      {links.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <Link className="block shadow-sm bg-[transparent] border border-[#00A9A4] text-[#00A9A4] p-3 pl-6 pr-6 rounded" to="/login">Log In</Link>
                <Link className="block shadow-sm bg-[#00A9A4] text-[#ffffff] p-3 pl-6 pr-6 rounded" to="/signup">Sign Up</Link>
              </div>
            </div>
          
          <div className="block md:hidden">
            <RxHamburgerMenu className="text-3xl text-[#00A9A4]" />
          </div>
        </div>
      </div>
    </div>
  );
}
