import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/forYou/SignUp";
import AddMobile from "./pages/auth/forYou/AddMobile";
import CombinedProvider from "./context/CombinedProvider";
import ConfirmYourPhone from "./pages/auth/forYou/ConfirmYourPhone";
import EmailPassword from "./pages/auth/forYou/EmailPassword";
import UserAddress from "./pages/auth/forYou/UserAddress";
import ForYou from "./pages/auth/forYou/ForYou";
import LinkYourCard from "./pages/linkYourCard/LinkYourCard";
import ForgottenPassword from "./pages/auth/ForgottenPassword";
import ForgottenEmail from "./pages/auth/ForgottenEmail";
import ScrollToTop from "./component/ScrollToTop";
import Dashboard from "./pages/dashboard/Dashboard";
import Transfer from "./pages/dashboard/pages/Transfer";
import Wallet from "./pages/dashboard/pages/Wallet";
import PrivateRoute from "./routes/PrivateRoute";
import Activities from "./pages/dashboard/pages/Activities";
import ProfilePage from "./pages/dashboard/pages/profilePage/ProfilePage";
import Account from "./pages/dashboard/pages/account/Account";
import Security from "./pages/dashboard/pages/security/Security";
import DataPrivacy from "./pages/dashboard/pages/dataPrivacy/DataPrivacy";
import Payments from "./pages/dashboard/pages/payments/Payments";
import Notifications from "./pages/dashboard/pages/notifications/Notifications";
import MessageCenter from "./pages/dashboard/pages/messageCenter/MessageCenter";
import ChangeName from "./pages/dashboard/pages/account/ChangeName";
import ChangeEmail from "./pages/dashboard/pages/account/ChangeEmail";
import ChangeNumber from "./pages/dashboard/pages/account/ChangeNumber";
import ChangePassword from "./pages/dashboard/pages/security/ChangePassword";
import EditAddress from "./pages/dashboard/pages/account/EditAddress";
import Verification2Step from "./pages/dashboard/pages/security/Verification2Step";
import SecurityQuestion from "./pages/dashboard/pages/security/SecurityQuestion";
import BlockedContact from "./pages/dashboard/pages/dataPrivacy/BlockedContact";
import CloseAccountDelete from "./pages/dashboard/pages/dataPrivacy/CloseAccountDelete";
import ChooseFundingSource from "./pages/dashboard/pages/payments/ChooseFundingSource";
import Header from "./component/header/Header";

function App() {
  const location = useLocation();

  const isHideHeader =
    location.pathname.includes("/signup") ||
    location.pathname.includes("/dashboard") ||
    location.pathname === "/link_your_card" ||
    location.pathname === "/signin" ||
    location.pathname === "/forgotten_email" ||
    location.pathname === "/select" ||
    location.pathname === "/testing" ||
    location.pathname === "/forgotten_password";
  const shouldRenderHeaderFooter = !isHideHeader;

  return (
    <div className="App">
      <CombinedProvider>
        <ScrollToTop />
        {shouldRenderHeaderFooter && (
          <>
          <Header />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/forgotten_password" element={<ForgottenPassword />} />
          <Route path="/forgotten_email" element={<ForgottenEmail />} />
          <Route exact path="/signup/*" element={<ForYou />}>
            <Route index element={<SignUp />} />
            <Route path="add_mobile" element={<AddMobile />} />
            <Route
              path="complete_phone_confirmation"
              element={<ConfirmYourPhone />}
            />
            <Route path="email_password" element={<EmailPassword />} />
            <Route path="user_address" element={<UserAddress />} />
          </Route>
          <Route exact path="/dashboard/*" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="link_your_card" element={<LinkYourCard />} />
            <Route path="activities" element={<Activities />} />
            <Route path="message" element={<MessageCenter />} />
            <Route path="profile/*" element={<ProfilePage />}>
              <Route index element={<Account />} />
              <Route path="security" element={<Security />} />
              <Route path="privacy" element={<DataPrivacy />} />
              <Route path="payments" element={<Payments />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="update-name" element={<ChangeName />} />
              <Route path="update-email" element={<ChangeEmail />} />
              <Route path="update-number" element={<ChangeNumber />} />
              <Route path="update-password" element={<ChangePassword />} />
              <Route path="update-address" element={<EditAddress />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="protect-your-account" element={<Verification2Step />} />
              <Route path="security-question" element={<SecurityQuestion />} />
              <Route path="blocked-contact" element={<BlockedContact />} />
              <Route path="close-account" element={<CloseAccountDelete />} />
              <Route path="choose-funding-source" element={<ChooseFundingSource />} />
            </Route>
          </Route>
        </Routes>
        {shouldRenderHeaderFooter && <Footer />}
      </CombinedProvider>
    </div>
  );
}

export default App;
