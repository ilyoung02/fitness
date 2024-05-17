import { useState } from "react";
import { CallGPT } from "./api/gpt";
import StatusInput from "./Components/StatusInput";
import styled from "styled-components";
import FitnessDiplay from "./Components/FitnessDiplay";
import { message } from "antd";
import './App.css';
import banner from "./assets/banner.jpg"

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
// 메인화면 gpt api
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
    <section id="main">
      <AppContainer>
        <button id="clist">챌린지 리스트</button>
        <button id="create">챌린지 생성</button>
        <button id="recommend">추천 챌린지</button>
        <button id="mychall">마이 챌린지</button>
        <button id="SNS">자유 게시판</button>
      </AppContainer>

      <AppContainer2>
        <img id="banner" src={banner}></img>
      </AppContainer2>

      <AppContainer3>
        {contextHolder}
        <AppTitle>
          Health Buddy
        </AppTitle>

        <StatusInput
          messageApi={messageApi}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />

        <FitnessDiplay isLoading={isLoading} data={data}/>
      </AppContainer3>
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

const AppContainer = styled.div`
  padding: 20px;
  display: block-inline;
  text-align: center;
`;

const AppContainer2 = styled.div`
  padding: 20px;
  display: flex;
  align: center;
  flex-direction: column;
  margin: 0 auto;
  width: 90%
`;

const AppContainer3 = styled.div`
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
  font-size: 40px;
  text-align: center;
  font-family: "Noto Serif KR";
  color: black;
`;