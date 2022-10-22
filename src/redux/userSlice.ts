import { createSlice } from "@reduxjs/toolkit";

import { resetReduxState } from "./customActions";

type InitialStateType = {
  user: { id: string | number; firstName: string; lastName: string };
};

const initialState: InitialStateType = {
  user: { id: "", firstName: "", lastName: "" }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetReduxState, () => ({ ...initialState }));
  }
});

export default userSlice.reducer;
