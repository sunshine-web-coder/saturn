import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";
import style from "./Style.module.scss"

export default function MobileHeader({ toggleDropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const openMenu = () => {
    setIsOpen(true);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (isOpen) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="max-w-[1120px] mx-auto flex items-center justify-between">
      <div className="flex flex-col gap-1" onClick={openMenu}>
        <div className="bg-[#d1f1ff] rounded w-6 h-[3px]"></div>
        <div className="bg-[#d1f1ff] rounded w-6 h-[3px]"></div>
        <div className="bg-[#d1f1ff] rounded w-6 h-[3px]"></div>
      </div>
      <div className="hidden">
        <Link to="/dashboard">
          <div className="text-4xl font-bold text-[#00A9A4]">
              Saturn
          </div>
        </Link>
      </div>
      <div className="text-xl text-[#d1f1ff]">
        <i
          className="fa-solid cursor-pointer mr-2 fa-bell"
          onClick={toggleDropdown}
        ></i>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-40 top-0 left-0 right-0 w-full h-full bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed w-[400px] z-50 transition-transform duration-300 ease-in-out ${style.mobile_nav} ${
            isOpen ? "transform translate-x-0" : "transform translate-x-[-100%]"
          }`}
        >
          <div className="p-4 text-[#d1f1ff]">
            <div className="flex justify-between">
              <div className="flex justify-between w-full items-center">
                <button className="uppercase font-semibold">Log out</button>
                <Link
                  to="/dashboard/profile"
                  className="uppercase"
                  onClick={closeMenu}
                >
                  <i className="fa-solid text-2xl fa-gear"></i>
                </Link>
                <i
                  className="fa-solid text-2xl fa-xmark"
                  onClick={closeMenu}
                ></i>
              </div>
            </div>
          </div>
          <div>
            <hr className="border border-[rgba(209,241,255,.1)]" />
          </div>
          <div className="capitalize text-xl text-center font-semibold text-[#d1f1ff] p-4">
            benjamin chukwu
          </div>
          <div>
            <hr className="border border-[rgba(209,241,255,.1)]" />
          </div>
          <nav className="mt-5">
            <ul>
              {NavLink.map((links, i) => (
                <li key={i}>
                  <Link
                    to={links.slug}
                    className={`block transition-all text-[#d1f1ff] text-xl font-semibold p-4 pl-7 hover:bg-[rgba(209,241,255,.1)] ${
                      location.pathname === links.slug ? "bg-[#27419A]" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {links.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
