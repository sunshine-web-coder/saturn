import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthentication from "./useAuthentication";
import Footer from "../pages/dashboard/Footer";
import Header from "../pages/dashboard/header/Header";
// import { UserAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { authenticated } = useAuthentication();
  const location = useLocation();

  const isHideHeader = 
  location.pathname.includes("/dashboard/link_your_card")||
  location.pathname === "/dashboard/profile/update-name"||
  location.pathname === "/dashboard/profile/update-number"||
  location.pathname === "/dashboard/profile/update-password"||
  location.pathname === "/dashboard/profile/update-address"||
  location.pathname === "/dashboard/profile/change-password"||
  location.pathname === "/dashboard/profile/protect-your-account"||
  location.pathname === "/dashboard/profile/security-question"||
  location.pathname === "/dashboard/profile/blocked-contact"||
  location.pathname === "/dashboard/profile/close-account"||
  location.pathname === "/dashboard/profile/choose-funding-source"||
  location.pathname === "/dashboard/profile/update-email"
  const shouldRenderHeaderFooter = !isHideHeader;

  return (
    <div>
      {authenticated ? (
        <>
          {shouldRenderHeaderFooter && <Header />}
          <Outlet />
          {shouldRenderHeaderFooter && <Footer />}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
