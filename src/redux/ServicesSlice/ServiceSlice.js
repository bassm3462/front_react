import { createSlice } from "@reduxjs/toolkit";
import { AddServices,getServices,DeleteServices} from ".//ServiseAction";
const initialState = {
    services: [],
    isSuccess:false,
    isError:false,
    message:"",
    loading:null,
};
const ServicesState = createSlice({
    name: "Services",
    initialState:initialState ,
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
        return state;
      },
    },
    extraReducers:(builder)=>{
        builder.addCase(AddServices.pending,(state)=>{})
        .addCase(AddServices.fulfilled,(state,action)=>{
            state.services= action.payload
            state.loading=true
            })
            .addCase(AddServices.rejected,(state)=>{
                })
    }

})


export default ServicesState.reducer;
export const userSelector = (state) => state.Services;

