import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import TabNotificationContent from "./TabNotificationContent";
import TabInboxContent from "./TabInboxContent";
import { NavLink } from "./NavLink";

export default function Header() {
  const [activeTab, setActiveTab] = useState("notification");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeNotification = () => {
    setIsOpen(false);
  };

  const navigateHome = () => {
    navigate("/")
  }

  return (
    <div className="w-full z-20 fixed right-0 left-0 p-0 md:p-4 pt-6 pb-6 bg-[#142C8E]">
      <div className="w-full p-5 pb-0 pt-0 block md:hidden">
        <MobileHeader toggleDropdown={toggleDropdown} />
      </div>
      <div className="max-w-[1120px] relative mx-auto flex items-center justify-between gap-5">
        <div className="hidden md:block">
          <div className="flex items-center">
            <Link to="/dashboard">
              <div className="text-3xl font-bold text-[#ffffff]">Saturn</div>
            </Link>
          </div>
        </div>
        <nav className="ml-5 hidden md:block">
          <ul className="flex gap-3">
            {NavLink.map((links, i) => (
              <li key={i}>
                <Link
                  to={links.slug}
                  className={`block text-lg p-4 pb-2 pt-2 text-white border border-[#142C8E] hover:border hover:border-gray-300/[0.15] transition-all rounded-full ${
                    location.pathname === links.slug ? "bg-[#27419A]" : ""
                  }`}
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <div className="text-xl flex gap-4 items-center text-white">
            <i
              className="fa-solid cursor-pointer mr-2 fa-bell"
              onClick={toggleDropdown}
            ></i>

            {/* <Link to="/dashboard/profile" className="uppercase">
              <i className="fa-solid fa-gear"></i>
            </Link> */}

            <button className="uppercase text-sm font-norma ml-2"
            onClick={navigateHome}
            >
              Log Out
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute arrow-top top-[-90px] bg-[#F5F7FA] md:top-[20px] right-[0px] w-full md:max-w-max mt-7 rounded-none md:rounded-md shadow-s">
            <div className="w-full md:w-[322px] h-screen md:h-[550px] pb-8 overflow-y-auto rounded-md custom_scroll border">
              <div className="sticky bg-[#F5F7FA] top-0 w-full p-3">
                <div className="text-right block md:hidden pt-3 pb-5">
                  <i
                    className="fa-solid text-2xl fa-xmark"
                    onClick={closeNotification}
                  ></i>
                </div>
                <div className="flex w-full">
                  <button
                    onClick={() => setActiveTab("notification")}
                    className={`py-2 rounded-l-md w-full px-3 ${
                      activeTab === "notification"
                        ? "bg-[#0070BA] text-white"
                        : "bg-white"
                    }`}
                  >
                    Notification
                  </button>
                  <button
                    onClick={() => setActiveTab("inbox")}
                    className={`py-2 rounded-r-md w-full px-3 ${
                      activeTab === "inbox"
                        ? "bg-[#0070BA] text-white"
                        : "bg-white"
                    }`}
                  >
                    Inbox
                  </button>
                </div>
              </div>
              <div className="">
                {activeTab === "notification" && (
                  <>
                    <TabNotificationContent />
                  </>
                )}
                {activeTab === "inbox" && (
                  <>
                    <TabInboxContent closeNotification={closeNotification} />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
