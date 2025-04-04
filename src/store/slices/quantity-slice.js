import { createSlice } from "@reduxjs/toolkit";

const initialState = {}; 

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    add: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;  // Ensure it starts from 1
      } else {
        state[id] = 1;
      }
      console.log(`Product: ${id}, Quantity: ${state[id]}`);
    },
    remove: (state, action) => {
      const id = action.payload;
      if (state[id] >= 1) {
        state[id] -= 1;
      } else {
        delete state[id];
      }
      console.log(`Product: ${id}, Quantity: ${state[id] || 0}`);
    },
  },
});

export const { add, remove } = quantitySlice.actions;
export default quantitySlice.reducer;
