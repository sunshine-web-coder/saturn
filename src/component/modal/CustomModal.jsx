import { useModal } from "../../context/ModalContext";
import style from "./CustomModal.module.scss";
import { Ring } from "@uiball/loaders";

const CustomModal = ({ children, className, title }) => {
  const { isModalOpen, closeModal, isModalContentReady } = useModal();

  if (!isModalOpen) {
    return null;
  }

  return (
    <div
      className={`fixed z-20 top-0 left-0 p-3 right-0 w-full h-screen bg-black/50`}
    >
      {isModalContentReady ? (
        <div
          className={`rounded mx-auto bg-white p-5 pt-4 ${className}`}
        >
          <div className="flex justify-end mb-5">
            <div className="text-center w-full">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <button className={style.custom_modal_close} onClick={closeModal}>
              <i className="fa-solid text-xl fa-xmark"></i>
            </button>
          </div>
          {children}
        </div>
      ) : (
        <div className="rounded max-w-[450px] h-[450px] pt-24 flex items-center justify-center mx-auto p-5">
          <Ring size={100} lineWeight={5} speed={2} color="black" />
        </div>
      )}
    </div>
  );
};

export default CustomModal;
