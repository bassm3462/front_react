import { createSlice } from "@reduxjs/toolkit";
import {
  displayArrayImageProduct,
  UploadImageProduct
} from "./ImageAction.js";
const ImageStateInit = {
  Images: [],
  isSuccess: false,
  isError: false,
  message: "",
  loading: null,
};
const ImageState = createSlice({
  name: "images",
  initialState: ImageStateInit,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
  builder.addCase(displayArrayImageProduct.pending, (state) => {
    state = { ...state, loading: true };
  })
  .addCase(displayArrayImageProduct.fulfilled, (state, action) => {
    if (action?.payload) {
      state.isError = false;
      state.isSuccess = true;
      state.message="Image"
      state.Images = action.payload.data.response;
    }
  })
  .addCase(displayArrayImageProduct.rejected, (state, { payload }) => {
    state.isError = true;
    state.loading = false;
    state.isSuccess = false;
    state.message = payload;
  });
  builder.addCase(UploadImageProduct.pending, (state) => {
    state = { ...state, loading: true };
  })
  .addCase(UploadImageProduct.fulfilled, (state, action) => {
    if (action) {
      state.isError = false;
      state.isSuccess = true;
      state.Images = action.payload.data.response.image.filename;
    }
  })
  .addCase(UploadImageProduct.rejected, (state, { payload }) => {
    state.isError = true;
    state.loading = false;
    state.isSuccess = false;
    state.message = payload;
  });
}
})
export default ImageState.reducer;
export const userSelector = (state) => state.Images;
export const { clearState } = ImageState.actions;