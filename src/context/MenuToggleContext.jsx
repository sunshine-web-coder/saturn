import { createContext, useContext, useState } from "react";

const MenuToggleContext = createContext();

export const useMenuToggle = () => useContext(MenuToggleContext);

export const MenuToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <MenuToggleContext.Provider
      value={{ isOpen, toggle, toggleOpen, toggleClose }}
    >
      {children}
    </MenuToggleContext.Provider>
  );
};
