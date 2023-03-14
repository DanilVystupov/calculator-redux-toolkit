import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import {
    inputDigit,
    inputDecimal,
    clearDisplay,
    toggleNegative,
    selectOperation,
    calculate,
} from "../store/actions";

function Calculator() {
    const displayValue = useSelector((state) => state.calculator.displayValue);
    const dispatch = useDispatch();

    const handleInputDigit = (digit) => {
        dispatch(inputDigit(digit));
    };

    const handleInputDecimal = () => {
        dispatch(inputDecimal());
    };

    const handleClearDisplay = () => {
        dispatch(clearDisplay());
    };

    const handleToggleNegative = () => {
        dispatch(toggleNegative());
    };

    const handleSelectOperation = (operator) => {
        dispatch(selectOperation(operator));
    };

    const handleCalculate = () => {
        dispatch(calculate());
    };

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="keypad">
                <button onClick={handleClearDisplay}>AC</button>
                <button onClick={handleToggleNegative}>±</button>
                <button onClick={() => handleSelectOperation("%")}>%</button>
                <button onClick={() => handleSelectOperation("/")}>÷</button>
                <button onClick={() => handleInputDigit(7)}>7</button>
                <button onClick={() => handleInputDigit(8)}>8</button>
                <button onClick={() => handleInputDigit(9)}>9</button>
                <button onClick={() => handleSelectOperation("*")}>×</button>
                <button onClick={() => handleInputDigit(4)}>4</button>
                <button onClick={() => handleInputDigit(5)}>5</button>
                <button onClick={() => handleInputDigit(6)}>6</button>
                <button onClick={() => handleSelectOperation("-")}>-</button>
                <button onClick={() => handleInputDigit(1)}>1</button>
                <button onClick={() => handleInputDigit(2)}>2</button>
                <button onClick={() => handleInputDigit(3)}>3</button>
                <button onClick={() => handleSelectOperation("+")}>+</button>
                <button className="zero" onClick={() => handleInputDigit(0)}>0</button>
                <button onClick={handleInputDecimal}>.</button>
                <button onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
}

export default Calculator;