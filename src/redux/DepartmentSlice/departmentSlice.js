import { createSlice } from "@reduxjs/toolkit";
import { getDepartment, UpdateDepartment, UpdateFiLE ,getSingleDepartment} from "./departmentAction"
const departmentReducer = createSlice({
    name: "departments",
    initialState: {
        departments: [],
        isError: false,
        isSuccess: false,
        isLoading: null,
        message: "",
    },
    reducers: {
        getData: (state, action) => {
            state.departments = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDepartment.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getDepartment.fulfilled, (state, { payload }) => {
                state.departments = payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(getDepartment.rejected, (state, { payload }) => {
                state.isError = true
                state.message = "error"
            })
        .addCase(UpdateDepartment.pending, (state) => {
            state.isLoading = true
        })
            .addCase(UpdateDepartment.fulfilled, (state, { payload }) => {
                state.isSuccess = true
                state.message = payload
                state.isLoading = false
            })
            .addCase(UpdateDepartment.rejected, (state, { payload }) => {
                state.isError = true
                state.message = "error"
            })
            .addCase(UpdateFiLE.pending, (state) => {
                state.isLoading = true
            })
                .addCase(UpdateFiLE.fulfilled, (state, { payload }) => {
                    state.isSuccess = true
                    state.isLoading = false
                })
                .addCase(UpdateFiLE.rejected, (state, { payload }) => {
                    state.isError = true
                    state.message = "error"
                })
                builder.addCase(getSingleDepartment.pending, (state) => {
                    state.isLoading = true
                })
                    .addCase(getSingleDepartment.fulfilled, (state, { payload }) => {
                        state.departments = payload
                        state.isSuccess = true
                        state.isLoading = false
                    })
                    .addCase(getSingleDepartment.rejected, (state, { payload }) => {
                        state.isError = true
                        state.message = "error"
                    })
       
    }
})
export default departmentReducer.reducer
export const { getData } = departmentReducer.actions
export const userSelector = (state) => state.departments;