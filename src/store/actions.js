import { createAction } from "@reduxjs/toolkit";

export const inputDigit = createAction("calculator/inputDigit");
export const inputDecimal = createAction("calculator/inputDecimal");
export const clearDisplay = createAction("calculator/clearDisplay");
export const toggleNegative = createAction("calculator/toggleNegative");
export const selectOperation = createAction("calculator/selectOperation");
export const calculate = createAction("calculator/calculate");