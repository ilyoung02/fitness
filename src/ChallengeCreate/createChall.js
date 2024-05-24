import React from "react";
import './createChall.css';
import { Checkbox } from "antd";

function loadFile(input) {
    let file = input.files[0]; // 선택파일 가져오기

    let newImage = document.createElement("img"); //새 이미지 태그 생성

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%"; //div에 꽉차게 넣으려고
    newImage.style.height = "100%";
    newImage.style.objectFit = "cover"; // div에 넘치지 않고 들어가게

    //이미지를 image-show div에 추가
    let container = document.getElementById('image-show');
    container.appendChild(newImage);
}

function createChall() {
    return (
        <componetContainer>
            <div>
            <form method="post">
            <table id="createChall-tableSize">
                <tr>
                    <th colSpan="3">챌린지 개설</th>
                </tr>
                <tr>
                    <td>챌린지 이름</td>
                    <td><input type="text"></input></td>
                </tr>
                <tr>
                    <td>챌린지 설명</td>
                    <td><input type="text"></input></td>
                </tr>
                <tr>
                    <td>운동 종류</td>
                    <td>
                        <select name="운동종류">
                            <option>헬스</option>
                            <option>맨몸 운동</option>
                            <option>요가</option>
                            <option>수영</option>
                            <option>재활</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>운동 목표</td>
                    <td>
                        <select name="운동종류">
                            <option>건강</option>
                            <option>근육 증가</option>
                            <option>취미</option>
                            <option>재활 치료</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>기간</td>
                    <td><label>시작일</label><input type="date"></input></td>
                    <td><label>종료일</label><input type="date"></input></td>
                    
                </tr>
                <tr>
                <td>요일</td>
                <td className="checkbox-group">
                    <label><input type="checkbox" name="요일" value="월요일" /> 월요일</label>
                    <label><input type="checkbox" name="요일" value="화요일" /> 화요일</label>
                    <label><input type="checkbox" name="요일" value="수요일" /> 수요일</label>
                    <label><input type="checkbox" name="요일" value="목요일" /> 목요일</label>
                    <label><input type="checkbox" name="요일" value="금요일" /> 금요일</label>
                    <label><input type="checkbox" name="요일" value="토요일" /> 토요일</label>
                    <label><input type="checkbox" name="요일" value="일요일" /> 일요일</label>
                </td>
                </tr>

                <tr>
                    <td>횟수</td>
                    <td><input type="text"></input></td>
                </tr>
                <tr>
                    <td>이미지 등록</td>
                    <td>
                    <form method="post" encType="multipart/form-data">
                        <div class="addImage" id="image-show"></div>
                        <input type="file" accept="image/*" onChange="loadFile(this)" class="set-center"></input>
                    </form></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="개설 완료" class="btn_submit"></input></td>
                </tr>
            </table>
            </form>
            </div>

        </componetContainer>
    )
}

export default createChall;