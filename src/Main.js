import { useState } from "react";
import { CallGPT } from "./api/gpt";
import StatusInput from "./Components/StatusInput";
import styled from "styled-components";
import FitnessDiplay from "./Components/FitnessDiplay";
import { message } from "antd";
import './Main.css';
import banner from "./assets/banner.jpg"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Clist from "./ChallengeList/Clist";
import Create from "./ChallengeCreate/Create"
import Mychall from "./MyChall/Mychall"
import Recommend from "./RecommendChall/Recommend";
import SNS from "./SNS/SNS";

const dummyData = JSON.parse(
    `{
      "title": "[Health Buddy]",
      "thumbnail": "https://source.unsplash.com/1600x900/?fitness,gym,challenge",
      "summary": "신체 요약",
      "physical_result": "신체 평가",
      "analysis": "신체 분석",
      "action_list": "팁"
      }`
  );

function Main() {
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
    // Routes 밖에 있는 요소들은 항상 화면에 표시
    // Route에는 해당 page의 경로 path
    // element에는 경로에 맞는 컴포넌트
    <section id="main">
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/Clist" element={<Clist />}>챌린지 리스트</Route>
            <Route path="/Create" element={<Create />}>챌린지 생성</Route>
            <Route path="/Recommend" element={<Recommend />}>추천 챌린지</Route>
            <Route path="/Mychall" element={<Mychall />}>마이 챌린지</Route>
            <Route path="/SNS" element={<SNS />}>커뮤니티</Route>
          </Routes>
        </BrowserRouter>
        <button id="clist"><a id="link" href="Clist">챌린지 리스트</a></button>
        <button id="create"><a id="link" href="Create">챌린지 생성</a></button>
        <button id="recommend"><a id="link" href="Recommend">추천 챌린지</a></button>
        <button id="mychall"><a id="link" href="Mychall">마이 챌린지</a></button>
        <button id="SNS"><a id="link" href="SNS">커뮤니티</a></button>
      </AppContainer>

      <AppContainer2>
        <img id="banner" src={banner}></img>
      </AppContainer2>

      <AppContainer3 id="gptinput">
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


export default Main;

const AppContainer = styled.div`
  padding: 20px;
  display: block-inline;
  text-align: center;
`;

const AppContainer2 = styled.div`
  padding: 20px 40px;
  display: flex;
  align: center;
  flex-direction: column;
  margin: 0 auto;
`;

const AppContainer3 = styled.div`
  padding: 20px;
  display: flex;
  align: center;
  flex-direction: column;
  max-width: 850px;
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