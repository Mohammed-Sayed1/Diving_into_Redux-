import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, // this is a feature in JS, this will parsed to this => initialCounterState: { counter: 0, showCounter: true }
  reducers: {
    increment(state) {
      state.counter++; // we can edit the existing state here because createSlice function which is a method in reduxjs/toolkit will handle the overriding the existing state
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;