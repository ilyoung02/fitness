import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createChall.css";

function CreateChall() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const loadFile = (event) => {
    const inputFile = event.target.files[0];
    setFile(URL.createObjectURL(inputFile));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    alert(
      "*********************챌린지 생성 성공 !!*********************\n마이 챌린지에서 생성하신 챌린지를 확인하세요 !"
    ); // Alert message
    navigate("/Mychall"); // Navigate to Mychall page
  };

  return (
    <div className="componentContainer">
      <form onSubmit={handleSubmit}>
        <table id="createChall-tableSize">
          <thead>
            <tr>
              <th colSpan="3">챌린지 개설</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>챌린지 이름</td>
              <td>
                <input type="text" name="challengeName" required />
              </td>
            </tr>
            <tr>
              <td>챌린지 설명</td>
              <td>
                <input type="text" name="challengeDescription" required />
              </td>
            </tr>
            <tr>
              <td>운동 종류</td>
              <td>
                <select name="exerciseType" required>
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
                <select name="exerciseGoal" required>
                  <option>다이어트</option>
                  <option>근육 증가</option>
                  <option>체지방 감소</option>
                  <option>근력 향상</option>
                  <option>지구력 향상</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>기간</td>
              <td>
                <label>시작일</label>
                <input type="date" name="startDate" required />
              </td>
              <td>
                <label>종료일</label>
                <input type="date" name="endDate" required />
              </td>
            </tr>
            <tr>
              <td>요일</td>
              <td className="checkbox-group">
                <label>
                  <input type="checkbox" name="days" value="월요일" /> 월요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="화요일" /> 화요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="수요일" /> 수요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="목요일" /> 목요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="금요일" /> 금요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="토요일" /> 토요일
                </label>
                <label>
                  <input type="checkbox" name="days" value="일요일" /> 일요일
                </label>
              </td>
            </tr>
            <tr>
              <td>횟수</td>
              <td>
                <input type="text" name="frequency" required />
              </td>
            </tr>
            <tr>
              <td>이미지 등록</td>
              <td>
                <div className="addImage" id="image-show">
                  {file && <img src={file} alt="챌린지 대표 이미지" />}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={loadFile}
                  className="set-center"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="개설 완료" className="btn_submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CreateChall;
