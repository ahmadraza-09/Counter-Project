import React, { useState } from 'react';

const Application = () => {
    
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

    const handleUndo = () => {
        if (currentStep > 0) {
            const newStep = currentStep - 1;
            setCurrentStep(newStep);
            setNum(history[newStep]);
        }
    };

    const handleRedo = () => {
        if (currentStep < history.length - 1) {
            const newStep = currentStep + 1;
            setCurrentStep(newStep);
            setNum(history[newStep]);
        }
    };

  return (
    <div className="App">
        <h1>{num}</h1>
        <div className='buttons'>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${(num / 150) * 100}%` }}></div>
        </div>
        <div className="buttons">
            <button onClick={handleUndo} disabled={currentStep === 0}>Undo</button>
            <button onClick={handleRedo} disabled={currentStep === history.length - 1}>Redo</button>
        </div>
    </div>
  );
}

export default Application;
