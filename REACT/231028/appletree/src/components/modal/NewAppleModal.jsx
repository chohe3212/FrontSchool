import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function NewAppleModal({ isOpen }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <>
        <h2>새로운 사과를 추가해보세요!</h2>
        <label>
          사과 당도 :
          <input
            type="text"
            style={{
              borderRadius: "5px",
              border: "1px solid black",
              width: "100%",
              marginTop: "10px",
              padding: "5px",
            }}
          />
        </label>
        <button>사과 추가하기</button>
      </>
    </Modal>
  );
}
