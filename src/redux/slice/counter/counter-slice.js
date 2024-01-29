import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: "",
  total: 3,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter(state, action) {
      state.total = state.total + 1;
    },
    decrementCounter(state, action) {
      state.total = state.total - 1;
    },
    fakeApiCall(state, action) {
      state.response = action.payload;
    },
  },
});
export const { incrementCounter, decrementCounter, fakeApiCall } =
  counterSlice.actions;
export default counterSlice.reducer;
