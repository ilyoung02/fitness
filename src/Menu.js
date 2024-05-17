import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/muscles-369784_1920.png"
import {
    HomeOutlined,
    SettingFilled,
    MenuOutlined,
    BellOutlined,
    BellFilled,
  } from '@ant-design/icons';
import Modal from "react-modal";
import './Menu.css';

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
        width: "270px",
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

            <BellOutlined id="Bell" type="button"/>
            <button id="loginbtn" type="button" onClick={openModal}>로그인</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={ModalStyles}>
                <h1>로그인</h1>
                <h3>아이디, 비밀번호를 입력하세요!</h3>
                <table id="loginT">
                    <tr>
                        <th>아이디</th>
                        <td><input id="id" type="text"></input></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <input id="pw" type="password"></input>
                    </tr>
                    <tr id="idsave">
                        <td colSpan={2}><input id="checkbox" type="checkbox"></input><ins>아이디 저장</ins></td>
                    </tr>
                    <tr>
                        <td><br/><br/><br/><br/><br/><br/><br/></td>
                    </tr>
                    <tr>
                        <td id="last" colSpan={2}>
                            <button id="Lbtn2" onClick={openModal}>회원가입</button>
                            <button id="Lbtn1" onClick={closeModal}>닫기</button>
                        </td>
                    </tr>
                </table>
            </Modal>
        </MenuContainer>
      );
}

export const MenuContainer = styled.div`
    border: 2px solid #b0e0e6;
    background-color: #e0ffff;
    padding: 20px;
    display: flex;
    color: black;
    text-align: center;
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
    font-size: 30px;
`;

export default Menu;