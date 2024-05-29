import React, { useState } from "react";
import Modal from "react-modal";
import "./Recommend.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    alert("신체 정보에 따른 챌린지 추천!"); // Alert message
    navigate("/challenge-recommend"); // Navigate to Mychall page
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
          <form onSubmit={handleSubmit}>
            <table id="createChall-tableSize">
              <thead>
                <tr>
                  <th colSpan="3">내 신체정보 입력</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>몸무게</td>
                  <td>
                    <input type="text" name="weight" required />
                  </td>
                </tr>
                <tr>
                  <td>골격근량</td>
                  <td>
                    <input type="text" name="SkeletalMuscleMass" required />
                  </td>
                </tr>
                <tr>
                  <td>체지방량</td>
                  <td>
                    <input type="text" name="BodyFatMass" required />
                  </td>
                </tr>
                <tr>
                  <td>운동 목표</td>
                  <td>
                    <select name="exerciseGoal" required>
                      <option>다이어트</option>
                      <option>근육 증가</option>
                      <option>체지방 감소</option>
                      <option>근력 향상</option>
                      <option>지구력 향상</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="submit" value="분석" className="btn_submit" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className="popup-close-btn" onClick={closeModal}>
            완료
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Recommend;
