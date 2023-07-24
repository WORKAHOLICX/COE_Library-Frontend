import React, { useEffect } from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, message }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const modalStyle = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: 10,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      className="mdd:w-[600px] w-[80vw] p-4"
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={modalStyle}
      ariaHideApp={false}
    >
      <div className="bg-white p-4 rounded-lg text-center">
        <p className="text-xl font-semibold">{message}</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 mt-1 text-white bg-blue-700 rounded hover:bg-blue-900"
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
