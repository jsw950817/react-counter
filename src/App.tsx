import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function Counter() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const reCount = 리턴값[1];

  let 초기화버튼;
  if (count !== 0) {
    초기화버튼 = <button onClick={() => reCount(0)}>초기화</button>;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => reCount((현재count) => 현재count + 1)}>
        증가
      </button>{" "}
      <button onClick={() => reCount((현재count) => 현재count - 1)}>
        감소
      </button>{" "}
      {초기화버튼}
    </div>
  );
}

function App() {
  // const counterArray = [];
  // for (let i = 0; i < 1000; i++) {
  // counterArray.push(<Counter></Counter>);
  // }
  const 학교이름들 = [
    "경기고",
    "성수고",
    "창동고",
    "숭신여고",
    "양명여고",
    "성신고",
  ];

  return (
    <div>
      {[<h1>안녕하세요</h1>]}
      {학교이름들.map((학교이름들) => (
        <div>
          <h1>{학교이름들}</h1>
          <Counter />
        </div>
      ))}
    </div>
  );
}
export default App;
