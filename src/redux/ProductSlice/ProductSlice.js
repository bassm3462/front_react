import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  displayProduct,
  displaySingleProduct,
  DispalyProductAndDepartment,
} from "./ProductAction";
const EmployState = {
  products: [],
  isSuccess: false,
  isError: false,
  message: "",
  loading: null,
};
const ProductSlice = createSlice({
  name: "products",
  initialState: EmployState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state = { ...state, loading: true };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action?.payload) {
          state.isError = false;
          state.isSuccess = true;
          state.message = action.payload;
        }
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.isError = true;
        state.loading = false;
        state.isSuccess = false;
        state.message = payload;
      });
    builder
      .addCase(displayProduct.pending, (state) => {
        state = { ...state, loading: true };
      })
      .addCase(displayProduct.fulfilled, (state, action) => {
        if (action?.payload) {
          state.isError = false;
          state.isSuccess = true;
          state.products = action.payload.data.response;
          //    state.message=action.payload;
        }
      })
      .addCase(displayProduct.rejected, (state, { payload }) => {
        state.isError = true;
        state.loading = false;
        state.isSuccess = false;
        state.message = payload;
      });
    builder
      .addCase(displaySingleProduct.pending, (state) => {
        state = { ...state, loading: true };
      })
      .addCase(displaySingleProduct.fulfilled, (state, action) => {
        if (action?.payload) {
          state.isError = false;
          state.isSuccess = true;
          state.products = action.payload.data.response;
        }
      })
      .addCase(displaySingleProduct.rejected, (state, { payload }) => {
        state.isError = true;
        state.loading = false;
        state.isSuccess = false;
        state.message = payload;
      });
    builder
      .addCase(DispalyProductAndDepartment.pending, (state) => {
        state = { ...state, loading: true };
      })
      .addCase(DispalyProductAndDepartment.fulfilled, (state, action) => {
          state.isError = false;
          state.isSuccess = true;
          state.message="succe"
          state.products = action.payload.data.response;
      })
      .addCase(DispalyProductAndDepartment.rejected, (state, { payload }) => {
        state.isError = true;
        state.loading = false;
        state.isSuccess = false;
        state.message = payload;
      });
     
  },
});
export default ProductSlice.reducer;
export const userSelector = (state) => state.Employ;
export const { clearState } = ProductSlice.actions;
