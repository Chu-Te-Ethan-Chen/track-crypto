import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    items: [],
  },
  reducers: {},
});

export const cryptoActions = cryptoSlice.actions;

export default cryptoSlice;
