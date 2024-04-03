import { CardContainer, Divider, FitnessContainer, ResultTitle,
    CardTitle, CardContent, ActionListItem, } from "./CommonStyles";

import styled from "styled-components";

import { LoadingOutlined, CheckCircleTwoTone, SoundTwoTone, HeartTwoTone, SmileTwoTone,
    MessageTwoTone } from "@ant-design/icons";

import { Image } from "antd";

const ThumbnailImage = styled(Image)`
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
`;

const FitnessDiplay = ({ data, isLoading }) => {
    return (
    <FitnessContainer>
        {isLoading && (
            <>
            불러오는중...
            <LoadingOutlined />
            </>
        )}

        <Divider />
        <CardContainer>
            <CardTitle>
                <CheckCircleTwoTone
                    twoToneColor="#FF9AA2"
                    style={{ marginRight: "6px" }}
                />
                사용자 상태 요약
            </CardTitle>
            <CardContent>{data.summary}</CardContent>
        </CardContainer>

        <br/>
        <Divider />
        <CardContainer>
            <CardTitle>
                <CheckCircleTwoTone
                    twoToneColor="#FFD700"
                    style={{ marginRight: "6px" }}
                />
                사용자 신체 평가
            </CardTitle>
            <CardContent>{data.physical_result}</CardContent>
        </CardContainer>

        <br/>
        <Image src={data.thumbnail} alt="썸네일 이미지" />

        <br/>
        <Divider />
        <CardContainer>
            <CardTitle>
                <MessageTwoTone
                    twoToneColor="#B5EAD7"
                    style={{ marginRight: "6px" }}
                />
                AI 분석
            </CardTitle>
            <CardContent>{data.analysis}</CardContent>
        </CardContainer>

        <br/>
        <Divider />
        <CardContainer>
            <CardTitle>
                <SoundTwoTone
                    twoToneColor="#C7CFFA"
                    style={{ marginRight: "6px" }}
                />
                AI 추천 팁 3가지
            </CardTitle>
            <CardContent>
                <ActionListItem>{data.action_list[0]}</ActionListItem>
                <ActionListItem>{data.action_list[1]}</ActionListItem>
                <ActionListItem>{data.action_list[2]}</ActionListItem>
            </CardContent>
        </CardContainer>
    </FitnessContainer>
    );
};

export default FitnessDiplay;