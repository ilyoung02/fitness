import React from "react";
import styled from "styled-components";
import './SNS.css';

function SNS() {
    return (
        <AppContainer>
            <Component>
                <button id="free">자유 게시판</button>
                <button id="qna">Q&A 게시판</button>
            </Component>
            <Component2>
                
            </Component2>
        </AppContainer>
    )
}

export default SNS;

const AppContainer = styled.div`
    text-align: center;
    background-color: gray;
`;

const Component = styled.div`
`;
const Component2 = styled.div`
`;