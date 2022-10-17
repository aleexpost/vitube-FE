import { createSlice } from "@reduxjs/toolkit";
import { resetReduxState } from "./customActions";

type VideoType = { src: string; id: string | number };

type InitialStateType = {
  videos: VideoType[];
};

const initialState: InitialStateType = {
  videos: []
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetReduxState, () => ({ ...initialState }));
  }
});

export default videoSlice.reducer;
