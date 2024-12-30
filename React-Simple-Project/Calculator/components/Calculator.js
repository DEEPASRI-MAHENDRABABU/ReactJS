import React, { useState } from 'react';

 
function Calculator() {
  const [input, setInput] = useState(''); // State for input
 
  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value); // Add value to input
  };
 
  // Function to handle clearing the input
  const handleClear = () => {
    setInput(''); // Reset input
  };
 
  // Function to handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Remove the last character
  };
 
  // Function to evaluate the expression
  const handleEvaluate = () => {
    try {
      // Simple and safe evaluation using Function constructor
      const result = new Function(`return ${input}`)();
      setInput(result.toString()); // Update display with the result
    } catch (error) {
      setInput('Error'); // Handle invalid expressions
    }
  };
 
  return (
    <div className="calculator">
        <h1>Calculator</h1>
      <div className="display">{input}</div> {/* Display area */}
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleClear} >C</button> 
        <button onClick={handleBackspace}>←</button> 
      </div>
    </div>
  );
}
 
export default Calculator;
