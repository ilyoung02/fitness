import { Input, Button, message } from 'antd';
import { useState } from 'react';
import { Title } from "./CommonStyles";
import styled from 'styled-components';

const { TextArea } = Input;

const StatusInput = ({ isLoading, onSubmit, messageApi }) => {
    const [userInput, setUserInput] = useState("");
    // const [messageApi, contextHolder] = message.useMessage();

    // 사용자의 입력을 받아, 상위 컴포넌트로 데이터 전달 : onSubmit 사용

    // loading 상태 = 사용자가 제출버튼을 못 누르도록 처리 : isLoading 사용
    const handleUserInput =(e)=> {
        setUserInput(e.target.value);
    };
    const handleClick = () => {
        if(!userInput) {
            messageApi.open({
                type: "error",
                content: "신체 상태를 적어주세요.",
            });
            return;
        }
        messageApi.open({
            type: "success",
            content: "생성 요청 완료",
        });
        onSubmit(userInput);
        setUserInput("");
    };

    return (
        <div>
        <br/>
        <TextArea
            value={userInput}
            onChange={handleUserInput}
            placeholder="사용자의 신체 상태, 운동, 목표 등(자세히 적을수록 좋아요!)"
            style={{ height: "200px", fontSize: "18px" }}
        />
        <ButtonContainer>
        <Button loading={isLoading} onClick={handleClick}>
         피트니스 챌린지 추천!
        </Button>
        </ButtonContainer>
        </div>
        // antd의 Button (외부 라이브러리 사용 = 개발 간편)
    );
}

export default StatusInput;

const ButtonContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;
// flex-end : 오른쪽으로 밀려남