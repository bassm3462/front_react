import { createSlice } from "@reduxjs/toolkit";
import { EmployRegister,DispalyDataEmploy ,DeleTeEmploy} from "./EmployAction";
const EmployState = {
    employ: [],
    isSuccess:false,
    isError:false,
    message:"",
    loading:null,
};
 const EmploySlice = createSlice({
    name: "Employ",
    initialState: EmployState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(EmployRegister.pending,(state)=>{
            state= {...state ,loading :true}
        })
        .addCase(EmployRegister.fulfilled,(state,action)=>{
            if (action?.payload)
            {
               state.isError=false;
               state.isSuccess=true;
               state.message=action.payload;
            }
        })
        .addCase(EmployRegister.rejected,(state,{payload})=>{
            state.isError=true;
            state.loading=false
            state.isSuccess=false;
            state.message=payload;
        })
        builder.addCase(DispalyDataEmploy.pending,(state)=>{state.loading=true})   
    .addCase(DispalyDataEmploy.fulfilled,(state,{payload})=>{
        state.isError=false;
        state.isSuccess=true;
        state.employ=payload;
    })
    .addCase(DispalyDataEmploy.rejected,(state,{payload})=>{
        state.Error=true;
        state.isSuccess=false;
        state.message=payload
    })
    builder.addCase(DeleTeEmploy.pending,(state)=>{state.loading=true})   
    .addCase(DeleTeEmploy.fulfilled,(state,{payload})=>{
        state.isError=false;
        state.isSuccess=true;
        state.message=payload
    })
    .addCase(DeleTeEmploy.rejected,(state,{payload})=>{
        state.Error=true;
        state.isSuccess=false;
        state.message=payload
    })
    }
})

export default EmploySlice.reducer;
export const userSelector = (state) => state.Employ;
export const {clearState}=EmploySlice.actions


