import React from "react";
import styled from "styled-components";
import './SNS1.css'

function SNS1() {
    return (
        <SNSContainer>
            <Component>
                <button id="free"><a href="SNS1">자유 게시판</a></button>
                <button id="qna"><a href="SNS2">Q&A 게시판</a></button>
            </Component>
            <Component2>
                <div id="SNS1">
                    <p id="SNS1t">자유 게시판</p>
                    <hr/>
                </div>
            </Component2>
        </SNSContainer>
    )
}

export default SNS1;

export const SNSContainer = styled.div`
`;
export const Component = styled.div`
`;
export const Component2 = styled.div`
`;