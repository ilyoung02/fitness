import React from "react";
import styled from "styled-components";
import './SNS2.css'

function SNS2() {
    return (
        <SNSContainer>
            <Component>
                <button id="free"><a href="SNS1">자유 게시판</a></button>
                <button id="qna"><a href="SNS2">Q&A 게시판</a></button>
            </Component>
            <Component2>
                <div id="SNS2">
                    <p id="SNS2t">Q&A</p>
                    <hr/>
                </div>
            </Component2>
        </SNSContainer>
    )
}

export default SNS2;

export const SNSContainer = styled.div`
`;
export const Component = styled.div`
`;
export const Component2 = styled.div`
`;