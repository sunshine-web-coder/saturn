import { Link } from "react-router-dom";
import { NavLinkData } from "./data";
import { Divider } from 'antd';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import "./Header.scss"
import { useMenuToggle } from "../../context/MenuToggleContext";
import { useEffect } from "react";

export default function Header() {
  const { isOpen, toggle, toggleClose } = useMenuToggle();

  useEffect(() => {
    if (isOpen) {
      // Add a class to the body to hide the scroll
      document.body.classList.add("no-scroll");
    } else {
      // Remove the class to enable scroll when the menu is closed
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className="header z-[30]">
      <div className="bg-[#030734] hidden top_header">
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
      <div className="bg-[#FFFFFF] bottom_header">
        <div className="custom_container inner_header min-h-[90px] flex items-center justify-between">
          <div className={`text-4xl font-bold text-[#00A9A4] ${isOpen ? "text-[#ffffff]" : "text-[#00A9A4]"}`}>
            {/* <img src="https://i.imgur.com/GtKPy40.png" alt="" /> */}
            Saturn
          </div>
          <div className={`fixed w-full h-screen left-0 top-0 overlay right-0 bg-black/50 ${isOpen ? "block":"hidden"}`}>
            <nav className={`navBar ${isOpen ? "open":"navBar"}`}>
                <ul className="flex gap-8 items-center">
                  {NavLinkData.map((links, i) => (
                    <li key={i}>
                      <Link
                        className="text-lg text-[#030734] font-semibold"
                        to={links.slug}
                        onClick={toggleClose}
                      >
                        {links.label}
                      </Link>
                    </li>
                  ))}
                  <div className="mobile_header_btn w-full p-5">
                      <div className="flex w-full border flex-col gap-4">
                        {/* <Link className="block w-full text-center shadow-sm bg-[transparent] border border-[#00A9A4] text-[#00A9A4] p-3 pl-6 pr-6 rounded" to="/login">Log In</Link> */}
                        <Link className="block w-full text-center shadow-sm bg-[#00A9A4] text-[#ffffff] p-3 pl-6 pr-6 rounded" to="/signin"
                        onClick={toggleClose}
                        >Sign In</Link>
                      </div>
                    </div>            
                </ul>
              </nav> 
          </div>
            
            <div className="header_btn">
              <div className="flex items-center gap-2">
                {/* <Link className="block shadow-sm bg-[transparent] border border-[#00A9A4] text-[#00A9A4] p-3 pl-6 pr-6 rounded" to="/login">Sign In</Link> */}
                <Link className="block shadow-sm bg-[#00A9A4] text-[#ffffff] p-3 pl-6 pr-6 rounded" to="/signin">Sign in</Link>
              </div>
            </div>
          
          <div className="hamburger" onClick={toggle}>
            {isOpen ? <TfiClose className={`text-3xl text-[#00A9A4] ${isOpen ? "text-[#ffffff]" : "text-[#00A9A4]"}`} /> : <RxHamburgerMenu className={`text-3xl text-[#00A9A4] ${isOpen ? "text-[#ffffff]" : "text-[#00A9A4]"}`} />}
          </div>
        </div>
      </div>
    </div>
  );
}
