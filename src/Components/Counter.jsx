import React, { useState } from 'react';

function Counter() {
  // 변수 정의
  const [count, setCount] = useState(0); // useState로 react 안에서 변수 선언
  const [userInput,setUserInput] = useState("");

  // 함수 정의
  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    setCount(count - 1);
  };
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleEnter = (e) => {
    if(e.key === "Enter") {
      setUserInput("")
      const num = Number(userInput);
      if (Number.isInteger(num)) setCount(num);
    }
  };

  // jsx 문법 사용
  return (
    <>
      <div>current count : {count}</div>
      <div>
        <div>count value input : </div>
        <input
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleEnter}
        ></input>
      </div>
      <div>
        <div>buttons : </div>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
    </>
  );
}

export default Counter;