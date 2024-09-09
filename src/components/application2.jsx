import React from "react";
import { useState } from "react";

const Application2 = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleIncrement = () => {
    if (num < 150) {
      const newNum = num + 1;
      updateHistory(newNum);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      updateHistory(newNum);
    }
  };

  const updateHistory = (newNum) => {
    const newHistory = history.slice(0, currentStep + 1);
    newHistory.push(newNum);
    setHistory(newHistory);
    setCurrentStep(newHistory.length - 1);
    setNum(newNum);
  };

  return (
    <div className="App">
      <h1>{num}</h1>
      <div className="buttons">
        <button onClick={handleDecrement} disabled={num === 0}>
          Decrement
        </button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(num / 150) * 100}%` }}
        ></div>
      </div>
      <div className="buttons">
        <button disabled={currentStep === 0}>Undo</button>
        <button disabled={currentStep === history.length - 1}>Redo</button>
      </div>
    </div>
  );
};

export default Application2;
