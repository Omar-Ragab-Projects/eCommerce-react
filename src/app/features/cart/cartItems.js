import { createSlice } from "@reduxjs/toolkit";

let items =
  localStorage.getItem("items") !== null &&
  JSON.parse(localStorage.getItem("items"));

// const checker =
//   localStorage.getItem("items") !== null && items.filter((i) => i.ammount > 1);
function checker() {
  items =
    localStorage.getItem("items") !== null &&
    items.filter((i) => i.ammount > 0);
}
checker();

const initialState = {
  value: items || [],
};

export const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const itemID = state.value.findIndex(
        (ele) => ele.id == action.payload.id
      );
      if (itemID >= 0) {
        state.value[itemID].ammount += 1;
      } else {
        state.value.push({ ...action.payload, ammount: 1 });
      }
      localStorage.setItem("items", JSON.stringify(state.value));
    },

    increment: (state, action) => {
      const itemID = state.value.findIndex((ele) => ele.id == action.payload);
      if (itemID >= 0) {
        state.value[itemID].ammount += 1;
      }
      localStorage.setItem("items", JSON.stringify(state.value));
    },
    decrement: (state, action) => {
      const itemID = state.value.findIndex((ele) => ele.id == action.payload);
      if (itemID >= 0 && state.value[itemID].ammount > 0) {
        state.value[itemID].ammount -= 1;
        localStorage.setItem("items", JSON.stringify(state.value));
      }
    },
  },
});

export const { addItems, increment, decrement } = cartItems.actions;

export default cartItems.reducer;
