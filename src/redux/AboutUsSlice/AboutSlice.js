import { createSlice } from "@reduxjs/toolkit";
import { AddAboutUs, getAboutUs,editAbout,DeleteAbout } from "./AboutAction";
const AboutState = createSlice({
  name: "About",
  initialState: {
    AboutD: [],
    isError: false,
    isSuccess: false,
    isLoading: null,
    message: "",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddAboutUs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddAboutUs.fulfilled, (state, { payload }) => {
        state.departments = payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(AddAboutUs.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = "error";
      });
    builder
      .addCase(getAboutUs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAboutUs.fulfilled, (state, { payload:{response} }) => {
        state.AboutD = response;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getAboutUs.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = "error";
      })
      builder
      .addCase(editAbout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAbout.fulfilled, (state, { payload:{message} }) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.message=message
      })
      .addCase(editAbout.rejected, (state,  payload ) => {
        state.isError = true;
        state.message = payload.message
      });
      builder
      .addCase(DeleteAbout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteAbout.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.message=payload.message
      })
      .addCase(DeleteAbout.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = "error";
      });
  },
});
export default AboutState.reducer
export const userSelector = (state) => state.About;
