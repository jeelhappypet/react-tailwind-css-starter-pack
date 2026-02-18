import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= state.value;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        
        multiply: (state, action) => {
            state.value *= 2;
        },

        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { multiply, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;