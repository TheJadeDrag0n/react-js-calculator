import "./App.css";
import { useState } from "react";
import CalcButtons from "./Components/CalcButtons";
import Inputs from "./Components/Inputs";

function App() {
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);
  const Calculate = (value) => {
    console.log("value", value);
    if (value !== "") {
      switch (value) {
        case "-":
          setAnswer(first - second);
          break;
        case "+":
          setAnswer(first + second);
          break;
        case "*":
          setAnswer(first * second);
          break;
        case "/":
          setAnswer(first / second);
          break;
        default:
          setAnswer("ERROR");
          break;
      }
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <Inputs 
        first = {first} 
        second = {second}
        setFirst = {setFirst}
        setSecond = {setSecond}
        answer = {answer}
      />
      <CalcButtons Calculate={Calculate} />
    </div>
  );
}

export default App;
