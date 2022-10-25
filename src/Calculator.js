<<<<<<< HEAD
import "./App.css";
import { useState } from "react";
import CalcButtons from "./Components/CalcButtons";
import ButtonKeypad from "./Components/ButtonKeypad";

function App() {
var [calcutation, setCalculation] = useState("")

  const updateCalculation = (value) => {
    
    calcutation += String(value)
    console.log(calcutation)

    if (value === "=") {
      var x = new Function(`return ${calcutation.slice(0, -1)}`)
      setCalculation(x)
    }
    else if (value === "clear") {
      setCalculation("")
    }
    else if (value === "del") {
      const result = calcutation.slice(0, -1);
      setCalculation(result)
    }
    else {
      setCalculation(calcutation);
    }
    console.log(`updateCalculation ${calcutation}`)
  };
  return (
    <div className="calc-box">
      <h1>Calculator</h1>
      <div className='output'>
        {calcutation || "Enter a number"}
      </div>
      <div className="buttons">
        <CalcButtons updateCalculation = {updateCalculation} />
        <div className="digits">
          <ButtonKeypad updateCalculation = {updateCalculation} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
=======
import "./App.css";
import { useState } from "react";
import CalcButtons from "./Components/CalcButtons";
import ButtonKeypad from "./Components/ButtonKeypad";

function App() {
var [calcutation, setCalculation] = useState("")

  const updateCalculation = (value) => {
    
    calcutation += String(value)
    console.log(calcutation)

    if (value === "=") {
      var x = new Function(`return ${calcutation.slice(0, -1)}`)
      setCalculation(x)
    }
    else if (value === "clear") {
      setCalculation("")
    }
    else if (value === "del") {
      const result = calcutation.slice(0, -1);
      setCalculation(result)
    }
    else {
      setCalculation(calcutation);
    }
    console.log(`updateCalculation ${calcutation}`)
  };
  return (
    <div className="calc-box">
      <h1>Calculator</h1>
      <div className='output'>
        {calcutation || "Enter a number"}
      </div>
      <div className="buttons">
        <CalcButtons updateCalculation = {updateCalculation} />
        <div className="digits">
          <ButtonKeypad updateCalculation = {updateCalculation} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
>>>>>>> f12148decc10ecf0ae70fb3abf2860a85e5962be
