import { useState } from "react";
import { CallGPT } from "./api/gpt";
import StatusInput from "./Components/StatusInput";
import styled from "styled-components";
import FitnessDiplay from "./Components/FitnessDiplay";
import { message } from "antd";
import './App.css';

const dummyData = JSON.parse(
  `{
    "title": "[맞춤형 AI 피트니스 챌린지]",
    "thumbnail": "https://source.unsplash.com/1600x900/?fitness,gym,challenge",
    "summary": "신체 요약",
    "physical_result": "신체 평가",
    "analysis": "신체 분석",
    "action_list": "팁"
    }`
);

function App() {
const [data, setData] = useState(dummyData);
const [isLoading, setIsLoading] = useState(false);
const [messageApi, contextHolder] = message.useMessage();

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt:`${userInput}`,
      });
      setData(JSON.parse(message));
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.message,
    });
    return;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  }

  return (
    <section>
      <Menu>
        <Button1><button id="b1">추천 영상</button></Button1>
        <Button2><button id="b2">피트니스 챌린지</button></Button2>
        <Button3><button id="b3">커뮤니티</button></Button3>
        <Button4><button id="b4">나의 운동 일지</button></Button4>
        <Button5><button id="b5">사용자 정보</button></Button5>
      </Menu>


    <AppContainer>
      {contextHolder}
      <AppTitle>
      다이어트는 오늘부터
      </AppTitle>
      <StatusInput
        messageApi={messageApi}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      
      <FitnessDiplay isLoading={isLoading} data={data}/>
    </AppContainer>
      
    </section>
  );
}

export default App;

const Menu = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  Text-align: center;
  font-size: 40px;
  background-color: #696969;
  width: 10%;
`;

const Button1 = styled.div`

`;
const Button2 = styled.div`

`;
const Button3 = styled.div`

`;
const Button4 = styled.div`

`;
const Button5 = styled.div`

`;

const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  align: center;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
  width: 80%
`;
// padding = 여백, display: flex = div태그 안에 있는 요소를 아래로 떨어지도록
// width: 100% = 요소를 최대한 넓힘, max-width: 720px = 720px만큼만 공간
// margin: 0 auto = 양쪽으로 남은 부분은 여백을 주도록 auto값 사용

const AppTitle = styled.div`
  margin-left: 10px;
  font-weight: 400;
  font-size: 45px;
  text-align: center;
  font-family: "Noto Serif KR";
  color: white;
`;