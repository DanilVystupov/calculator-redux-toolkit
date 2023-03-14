import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayValue: "0",
    value: null,
    operator: null,
    waitingForOperand: false
};

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        inputDigit: (state, action) => {
            const digit = action.payload;
            if (state.waitingForOperand) {
                state.displayValue = String(digit);
                state.waitingForOperand = false;
            } else {
                state.displayValue =
                    state.displayValue === "0"
                        ? String(digit)
                        : state.displayValue + digit;
            }
        },
        inputDecimal: (state) => {
            if (state.waitingForOperand) {
                state.displayValue = "0.";
                state.waitingForOperand = false;
            } else if (!state.displayValue.includes(".")) {
                state.displayValue += ".";
            }
        },
        clearDisplay: (state) => {
            state.displayValue = "0";
            state.value = null;
            state.operator = null;
            state.waitingForOperand = false;
        },
        toggleNegative: (state) => {
            state.displayValue =
                state.displayValue.charAt(0) === "-"
                    ? state.displayValue.slice(1)
                    : "-" + state.displayValue;
        },
        selectOperation: (state, action) => {
            const operator = action.payload;
            const inputValue = parseFloat(state.displayValue);
            performOperation(state, inputValue);
            state.operator = operator;
        },
        calculate: (state) => {
            if (state.operator && !state.waitingForOperand) {
                const inputValue = parseFloat(state.displayValue);
                performOperation(state, inputValue);
                state.operator = null;
            }
            state.waitingForOperand = true;
        },
    }
});


function performOperation(state, inputValue) {
    const { value, operator } = state;

    if (value === null) {
        state.value = inputValue;
    } else if (operator) {
        const currentValue = value || 0;
        const newValue = calculateResult(currentValue, operator, inputValue);
        state.value = newValue;
        state.displayValue = String(newValue);
    }
    state.waitingForOperand = true;
}

function calculateResult(value1, operator, value2) {
    switch (operator) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return 0;
    }
}



export const {
    inputDigit,
    inputDecimal,
    clearDisplay,
    toggleNegative,
    selectOperation,
    calculate
} = calculatorSlice.actions;

export default calculatorSlice.reducer;