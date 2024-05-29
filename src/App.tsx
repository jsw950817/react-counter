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
  return (
    <div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
