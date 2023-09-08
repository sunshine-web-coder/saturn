import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContentReady, setIsModalContentReady] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Simulate loading of content (e.g., fetching data)
    setTimeout(() => {
      setIsModalContentReady(true);
    }, 1000); // Adjust the duration as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalContentReady(false); // Reset content readiness when closing modal
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, isModalContentReady, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
