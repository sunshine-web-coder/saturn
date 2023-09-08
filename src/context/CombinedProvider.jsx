import { MenuToggleProvider } from "./MenuToggleContext";
import { ModalProvider } from "./ModalContext";

const CombinedProvider = ({ children }) => {
  return (
    <ModalProvider>
      <MenuToggleProvider>{children}</MenuToggleProvider>
    </ModalProvider>
  );
};

export default CombinedProvider;
