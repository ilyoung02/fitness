import React, { useState } from "react";
import Modal from "react-modal";
import "./Recommend.css";

const ModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    width: "600px",
    height: "auto",
    margin: "auto",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "10px 10px 25px 20px",
  },
};

function Recommend() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="componentContainer">
      <table class="styledTable">
        <tr>
          <td>
            <h2>원하는 운동 추천받기!</h2>
          </td>
        </tr>
        <tr>
          <td>
            <button className="recommendButton" onClick={openModal}>
              신체정보입력
            </button>
          </td>
        </tr>
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
      >
        <div className="modal-content">
          <h3 className="modal-title">내 신체정보 입력</h3>
          <textarea
            className="comment-input"
            placeholder="신체 정보 입력"
          ></textarea>
          <button className="popup-close-btn" onClick={closeModal}>
            완료
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Recommend;
