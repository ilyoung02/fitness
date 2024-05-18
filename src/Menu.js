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
import Modal2 from "react-modal";
import './Menu.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Clist from "./ChallengeList/Clist";
import Create from "./ChallengeCreate/Create"
import Mychall from "./MyChall/Mychall"
import Recommend from "./RecommendChall/Recommend";
import SNS from "./SNS/SNS";
import Main from "./Main";

function Menu() {
// 로그인 팝업창
const [isOpen, setIsOpen] = useState(false);
const openModal = () => {
  setIsOpen(true);
};
const closeModal = () => {
  setIsOpen(false);
};

const openModal2 = () => {
    setIsOpen(true);
  };
  const closeModal2 = () => {
    setIsOpen(false);
  };

const ModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
        width: "270px",
        height: "400px",
        margin: "auto",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "30px",
    },
};


    return (
        <AppContainer>
            <MenuContainer>
                <LogoImage>
                <a href="/"><img width={"80px"} src={logo}></img></a>
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
                            <button id="signup" onClick={openModal2}>회원가입</button>
                            <button id="Lbtn1" onClick={closeModal}>닫기</button>
                        </td>
                    </tr>
                </table>
            </Modal>
        </MenuContainer>
        <button id="clist"><a id="link" href="Clist">챌린지 리스트</a></button>
        <button id="create"><a id="link" href="Create">챌린지 생성</a></button>
        <button id="recommend"><a id="link" href="Recommend">추천 챌린지</a></button>
        <button id="mychall"><a id="link" href="Mychall">마이 챌린지</a></button>
        <button id="SNS"><a id="link" href="SNS">커뮤니티</a></button>
        <button id="home"><a id="link" href="/">홈</a></button>
        <br/><br/>
        <BrowserRouter>
          <Routes>
            <Route path="/Main" element={<Main />}>메인화면</Route>
            <Route path="/Clist" element={<Clist />}>챌린지 리스트</Route>
            <Route path="/Create" element={<Create />}>챌린지 생성</Route>
            <Route path="/Recommend" element={<Recommend />}>추천 챌린지</Route>
            <Route path="/Mychall" element={<Mychall />}>마이 챌린지</Route>
            <Route path="/SNS" element={<SNS />}>커뮤니티</Route>
          </Routes>
        </BrowserRouter>
        </AppContainer>
      );
}

const AppContainer = styled.div`
  display: block-inline;
  text-align: center;
`;

export const MenuContainer = styled.div`
    border-bottom: 3px solid black;
    background-color: white;
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
    font-weight: bold;
`;

export default Menu;