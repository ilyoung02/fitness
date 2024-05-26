import React from "react";
import logo1 from "./fitnessicon/cardio.png"
import logo2 from "./fitnessicon/health.png"
import logo3 from "./fitnessicon/meditation.png"
import logo4 from "./fitnessicon/pilates.png"
import logo5 from "./fitnessicon/push.png"
import logo6 from "./fitnessicon/rope.png"
import logo7 from "./fitnessicon/run.png"
import logo8 from "./fitnessicon/stretch.png"
import logo9 from "./fitnessicon/swim.png"
import logo10 from "./fitnessicon/yoga.png"
import styled from "styled-components";
import './Clist.css';
import { useState } from "react";
import Modal from "./Modal";
import {
    SearchOutlined
} from '@ant-design/icons';

function Clist() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);

    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const openModal3 = () => setIsModalOpen3(true);
    const closeModal3 = () => setIsModalOpen3(false);

    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const openModal4 = () => setIsModalOpen4(true);
    const closeModal4 = () => setIsModalOpen4(false);

    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const openModal5 = () => setIsModalOpen5(true);
    const closeModal5 = () => setIsModalOpen5(false);

    const [isModalOpen6, setIsModalOpen6] = useState(false);
    const openModal6 = () => setIsModalOpen6(true);
    const closeModal6 = () => setIsModalOpen6(false);
    
    return (
        <ComponentContainer>
            <hr id="tophr"/>
            <br/>
            <div class="search">
                <SearchOutlined id="searchicon"></SearchOutlined>
                <input id="search-input" placeholder="검색어를 입력하세요" />
            </div>
            <img id="f1" width={70} src={logo1}></img>
            <img id="f2" width={70} src={logo2}></img>
            <img id="f3" width={70} src={logo3}></img>
            <img id="f4" width={70} src={logo4}></img>
            <img id="f5" width={70} src={logo5}></img>
            <br/>
            <img id="f6" width={70} src={logo6}></img>
            <img id="f7" width={70} src={logo7}></img>
            <img id="f8" width={70} src={logo8}></img>
            <img id="f9" width={70} src={logo9}></img>
            <img id="f10"width={70} src={logo10}></img>
            <br/><br/>
            <br/>
            <button id="b1" onClick={openModal}>1</button>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <h1>hi</h1>
            </Modal>
            <button id="b2" onClick={openModal2}>2</button>
            <Modal isOpen={isModalOpen2} closeModal={closeModal2}>
                <h1>hi!!!</h1>
            </Modal>
            <button id="b3" onClick={openModal3}>3</button>
            <Modal isOpen={isModalOpen3} closeModal={closeModal3}>
                <h1>Hellow~</h1>
            </Modal>
            <button id="b4" onClick={openModal}>4</button>
            <button id="b5" onClick={openModal}>5</button>
            <br/>
            <button id="b6" onClick={openModal}>6</button>
            <button id="b7" onClick={openModal}>7</button>
            <button id="b8" onClick={openModal}>8</button>
            <button id="b9" onClick={openModal}>9</button>
            <button id="b10" onClick={openModal}>10</button>
            <Component>

            </Component>
        </ComponentContainer>
    )
}

export default Clist;

const ComponentContainer = styled.div`
  text-align: center;
`;

const Component = styled.div`
`;