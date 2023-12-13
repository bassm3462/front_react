import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../api/axios"
export const getDepartment = createAsyncThunk("Department/show", async (thunkAPI) => {
  try {
    const response = await axios.get(`${backendURL}/api/Department/show`);
    return (response.data.response);
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    } else {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
})
export const UpdateDepartment = createAsyncThunk("Department/Edit", async ({ name, Category, description, DepartmentID }, thunkAPI) => {
  try {
    const response = await axios({
      method: "put",
      url: `${backendURL}/api/Department/Edit/${DepartmentID}`,
      headers: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      data: { name, Category, description },
    })
    if (response && response?.data) {
      return response.data.message
    }
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    } else {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
})
export const UpdateFiLE = createAsyncThunk("Department/Edit/File", async ({ formData, DepartmentID }, thunkAPI) => {
  try {
    const response = await axios({
      method: "put",
      url: `${backendURL}/api/Department/Edit/image/${DepartmentID}`,
      headers: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      data: formData,
    })
    if (response && response?.data) {
      return response.data
    }
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    } else {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
})
export const getSingleDepartment = createAsyncThunk("Department/department/", async (DepartmentID, thunkAPI) => {
  try {
    const token= localStorage.getItem("token")
    const response = await axios({
      method:"get",
      url:`${backendURL}/api/Department/Display/${DepartmentID}`,
        headers :{
          "Content-Type":"application/json",
          "token": token,
        },
    });
    return (response.data.response);
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    } else {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
})