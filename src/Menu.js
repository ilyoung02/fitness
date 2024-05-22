import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/muscles-369784_1920.png"
import logo2 from "./assets/yeongnam.jpg"
import {
    HomeOutlined,
    SettingFilled,
    MenuOutlined,
    BellOutlined,
  } from '@ant-design/icons';
import Modal from "react-modal";
import './Menu.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Clist from "./ChallengeList/Clist";
import Create from "./ChallengeCreate/Create"
import Mychall from "./MyChall/Mychall"
import Recommend from "./RecommendChall/Recommend";
import SNS from "./SNS/SNS";
import Main from "./Main";
import notice from "./notice/notice";
import Signup from "./Signup/Signup";

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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
        width: "337px",
        height: "430px",
        margin: "auto",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "10px 10px 25px 20px",
    },
};

    return (
        <AppContainer>
            <MenuContainer>
                <LogoImage>
                <a href="/Main"><img width={"80px"} src={logo}></img></a>
                </LogoImage>

                <Title id="deco">
                    Health Buddy
                </Title>

            <a id="notice" href="/notice"><BellOutlined id="Bell" type="button"/></a>
            <button id="loginbtn" type="button" onClick={openModal}>로그인</button>

            <Modal isOpen={isOpen} onRequestClose={closeModal} style={ModalStyles}>
                <h1>로그인</h1>
                <h3>아이디, 비밀번호를 입력하세요!</h3>
                <form method="GET">
                <table id="loginT">
                    <tr>
                        <th colSpan={1}>아이디</th>
                        <td colSpan={2}><input id="id" type="text"></input></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th colSpan={1}>비밀번호</th>
                        <td colSpan={2}><input id="pw" type="password"></input></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr id="idsave">
                        <td></td>
                        <td colSpan={2}><input id="checkbox" type="checkbox"></input><ins>아이디 저장</ins></td>
                    </tr>
                    <tr>
                        <td><br/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><input id="submit" type="submit"></input></td>
                    </tr>
                    <tr>
                        <td><br/><br/><br/><br/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="last">
                            <button id="signup"><a id="link" href="Singup">회원가입</a></button>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="Signup" element={<Signup />}>회원가입</Route>
                                </Routes>
                            </BrowserRouter>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button id="Lbtn1" onClick={closeModal}>닫기</button></td>
                    </tr>
                </table>
                </form>
            </Modal>
        </MenuContainer>
        <button id="home"><a id="link" href="Main">홈</a></button>
        <button id="clist"><a id="link" href="Clist">챌린지 리스트</a></button>
        <button id="create"><a id="link" href="Create">챌린지 개설</a></button>
        <button id="recommend"><a id="link" href="Recommend">추천 챌린지</a></button>
        <button id="mychall"><a id="link" href="Mychall">마이 챌린지</a></button>
        <button id="SNS"><a id="link" href="SNS">커뮤니티</a></button>
        <br/>
        <BrowserRouter>
          <Routes>
            <Route path="/Main" element={<Main />}>메인화면</Route>
            <Route path="/Clist" element={<Clist />}>챌린지 리스트</Route>
            <Route path="/Create" element={<Create />}>챌린지 개설</Route>
            <Route path="/Recommend" element={<Recommend />}>추천 챌린지</Route>
            <Route path="/Mychall" element={<Mychall />}>마이 챌린지</Route>
            <Route path="/SNS" element={<SNS />}>커뮤니티</Route>
            <Route path="/notice" element={<notice />}>알림</Route>
          </Routes>
        </BrowserRouter>

        <br/><br/><br/><br/><br/>
        
        <div id="t">
            <br/>
            <span id="t1">팀장</span><span> : 김채윤</span>
            <br/><br/> 
            <span id="t2">팀원</span><span> : 방일영 박대근 이상윤 이동혁</span>
            <br/><br/>
            <img width={320} src={logo2}></img>
            <p>경산캠퍼스 우) 38541 경상북도 경산시 대학로 280</p>
            <p>대구캠퍼스 우) 42415 대구광역시 남구 현충로 170</p>
            <p>원격교육지원센터 TEL. 053) 810-1959 / FAX 053-810-2038 / EMAIL dge@yu.ac.kr</p>
            <p>Copyright ⓒ 2021 Yeungnam University. All Rights Reserved.</p>
            <br/>
        </div>
        </AppContainer>
      );
}

const AppContainer = styled.div`
  display: block-inline;
  text-align: center;
`;

export const MenuContainer = styled.div`
    background-color: white;
    padding: 25px;
    display: flex;
    color: black;
    text-align: center;
    background-image: linear-gradient(85deg, #e0ffff, #e6e6fa);
`;

export const LogoImage = styled.div`
    margin-left: 20px;
    width: 15%;
`;

export const Title = styled.div`
    margin-left: 20px;
    width: 70%;
    Text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export default Menu;