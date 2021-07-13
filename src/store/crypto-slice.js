import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    coinsList: [],
    coinsInfo: [],
  },
  reducers: {
    addCoinsInfo() {},
    removeCoinsInfo() {},
  },
});

export const cryptoActions = cryptoSlice.actions;

export default cryptoSlice;
