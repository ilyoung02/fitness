import React from "react";
import styled from "styled-components";
import logo from "./assets/muscles-369784_1920.png"
import {
    HomeOutlined,
    SettingFilled,
    MenuOutlined,
  } from '@ant-design/icons';

function Menu() {
    return (
        <MenuContainer>
            <LogoImage>
            <img width={"80px"} src={logo}></img>
            </LogoImage>

            <Title>
            맞춤형 AI 피트니스 챌린지
            </Title>

            <MenuOptionContainer>
                <HomeOutlined type="button"></HomeOutlined>
                <SettingFilled type="button"></SettingFilled>
                <MenuOutlined type="button"></MenuOutlined>
            </MenuOptionContainer>
        </MenuContainer>
      );
}

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
export const MenuOptionContainer = styled.div`
    width: 15%;
    display: flex;
    margin-right: 20px;
    justify-content: end;
`;

export default Menu;