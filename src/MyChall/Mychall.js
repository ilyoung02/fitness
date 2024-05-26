import './MyChall.css';
import React, { useState } from "react";
import Modal from 'react-modal';
import defaultImg from "./fitnesssampleimg.png";
import { getOverflowOptions } from 'antd/es/_util/placements';

// 팝업창
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

function Mychall() {
    let successRatio = 70; // 예시를 위해 70%로 설정
    // 팝업 상태를 관리하는 useState 훅 추가
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 팝업을 열기 위한 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 팝업을 닫기 위한 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="componentContainer">
            <div className="progress-container">
                <label htmlFor="progress">나의 챌린지 성공률 <span className="progress-text">{successRatio}%</span></label>
                <progress id="progress" value={successRatio} max="100"></progress>
            </div>

            <div className="sub_photo">
                <div className="title_area">
                    <h4 className="hh_photo"><strong className="blind">갤러리</strong></h4>
                </div>
                <ul>
                    <li onClick={openModal}> {/* 클릭 시 팝업 열기 */}
                        <p className="thmb">
                            <a href="#">
                                <img src="http://챌린지 이미지 주소" alt="챌린지 이미지" />  
                            </a>
                        </p>
                        <a href="#"><strong>챌린지 이름</strong></a>
                        <p className="tx_brief">개설날짜</p>
                    </li>
                </ul>
            </div>

            <div className="paginate">
                <a className="pre" href="#">이전</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <strong>5</strong> {/* 선택된 페이지 */}
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
                <a className="next" href="#">다음</a>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={ModalStyles}>
                <div className="modal-content">
                    <h3 className="modal-title">챌린지 후기 리스트</h3>
                        {/* 디폴트 이미지를 추가합니다. */}
                        <img src={defaultImg} alt="챌린지 이미지" className="default-image" />
                        <textarea className="comment-input" placeholder="댓글을 입력하세요"></textarea>
                        <button className="popup-close-btn" onClick={closeModal}>닫기</button>
                </div>
            </Modal>



        </div>
    );
}

export default Mychall;
