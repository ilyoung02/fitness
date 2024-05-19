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

function Clist() {
    return (
        <ComponentContainer>
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
            <br/><br/><br/>
        </ComponentContainer>
    )
}

export default Clist;

const ComponentContainer = styled.div`
  text-align: center;
`;
