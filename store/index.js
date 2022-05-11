import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserFetch: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      const newState = state;
      newState.name = payload.name;
      newState.isLoading = false;
    },
    getUserFailure: () => {
      state.isLoading = false;
    },
  },
});

export const { getUserFetch, getUserSuccess, getUserFailure } =
  userSlice.actions;

export default userSlice.reducer;
