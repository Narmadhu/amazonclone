import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  user: string;
}

export const initialState: InitialState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
