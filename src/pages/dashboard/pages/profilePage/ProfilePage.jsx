import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

export default function ProfilePage() {
  const location = useLocation();

  const isHideHeader = location.pathname === "/dashboard/profile/update-name"||
  location.pathname === "/dashboard/profile/update-email"||
  location.pathname === "/dashboard/profile/update-password"||
  location.pathname === "/dashboard/profile/update-address"||
  location.pathname === "/dashboard/profile/change-password"||
  location.pathname === "/dashboard/profile/protect-your-account"||
  location.pathname === "/dashboard/profile/security-question"||
  location.pathname === "/dashboard/profile/blocked-contact"||
  location.pathname === "/dashboard/profile/close-account"||
  location.pathname === "/dashboard/profile/choose-funding-source"||
  location.pathname === "/dashboard/profile/update-number"
  const shouldRenderHeaderFooter = !isHideHeader;

  return (
    <div className={`w-full bg-[#FAF8F5] h-full`}>
      {shouldRenderHeaderFooter && <Header />}

      <div className="max-w-[1100px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
