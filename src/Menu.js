import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/muscles-369784_1920.png"
import {
    HomeOutlined,
    SettingFilled,
    MenuOutlined,
  } from '@ant-design/icons';
import Modal from "react-modal";

function Menu() {
// 로그인 팝업창
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

const ModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        width: "300px",
        height: "400px",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "20px",
    },
};

/* 카카오 로그인
const KLogin = () => {
    const REST_API_KEY = ``;
    const REDIRECT_URI = '';
    const link = 'https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code'
}
const loginHandler = () => {
    window.location.href = link;
};
*/


    return (
        <MenuContainer>
            <LogoImage>
            <img width={"80px"} src={logo}></img>
            </LogoImage>

            <Title>
            Health Buddy
            </Title>

            <SettingFilled type="button" onClick={openModal}></SettingFilled>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={ModalStyles}>
                <h1>로그인</h1>
                <h3>아이디, 비밀번호를 입력하세요!</h3>
                
                <button id="Lbtn" onClick={closeModal}>닫기</button>
            </Modal>
        </MenuContainer>
      );
}

export const button = styled.div`
    width: 50px;
    background-color: #FFFFFF;
`;

export const MenuContainer = styled.div`
    background-color: #696969;
    padding: 20px;
    display: flex;
    color: white;
`;
export const LogoImage = styled.div`
    margin-left: 20px;
    width: 15%;
`;
export const Title = styled.div`
    margin-top: 4px;
    margin-left: 20px;
    width: 70%;
    Text-align: center;
    font-size: 25px;
`;

export default Menu;