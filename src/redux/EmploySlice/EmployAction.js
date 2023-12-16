import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../api/axios";
 export const EmployRegister = createAsyncThunk(
  "Employ/register",
  async (formData, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url:`${backendURL}/api/admin/Employ`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data:formData,
      });
      if (response || response?.data) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const DispalyDataEmploy=createAsyncThunk("Employ/List",async(thunkAPI)=>{
try{
  const response=await axios.get(`${backendURL}/api/admin/Employ/List`)
    return  response.data.response;
}catch(error){
  if (error.response && error.response.data.message) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  } else {
    return thunkAPI.rejectWithValue(error.message)
  }
}
})
export const DeleTeEmploy=createAsyncThunk("Delete/Employ",async(id,thunkAPI)=>{
  try{
  const response=axios.delete(`${backendURL}/api/delete/${id}`)
  if(response){
    return response.data.response.message;
  }
}catch(error){
  if (error.response && error.response.data.message) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  } else {
    return thunkAPI.rejectWithValue(error.message)
  }
}
})
