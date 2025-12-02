import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
        state.userData = action.payload;
    },
  },
});

export const { setUserData } = user.actions;
export default user.reducer;