import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL, token } from "../api/axios";
export const AddMessage = createAsyncThunk(
  "Costumer/Chat",
  async ({formData,DepartmentID}, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: `${backendURL}/api/Chat/AddMessage/${DepartmentID}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token": token
        },
        data: (formData)
      });
      if (response) {
        console.log(response);
        return response;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const getMessage = createAsyncThunk(
  "Coustomer/getMessage",
  async (DepartmentID,thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${backendURL}/api/Chat/getMessage/${DepartmentID}`,
        headers: {
          "token": token
        },
      });
      if (response || response?.data) {
        console.log(response);
        return response.data }
    } catch (error) {
      if (error.response && error.response.data.response.message) {
        return thunkAPI.rejectWithValue(error.response.data.response.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const EditMessage = createAsyncThunk("admain/edit/About", async ({ AboutID, formData }, thunkAPI) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${backendURL}/api/Admin/editAbout/${AboutID}`,
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json", "token": token
      },
      data: formData,
    })
    if (response || response?.data) { return response.data }
  } catch (error) {
    if (error.response && error.response.data.response.message) {
      return thunkAPI.rejectWithValue(error.response.data.response.message);
    } else {
      return thunkAPI.rejectWithValue(error.message);
    }
  }

})
export const DeleteAbout = createAsyncThunk("Admin/deleteAbout", async (AboutID, thunkAPI) => {
  try {
    const response = await axios.delete(`${backendURL}/api/Admin/DeleteAbout/${AboutID}`)
    if (response || response?.data) return response.data;
  } catch (err) {
    if (err.response && err.response.data.response.message) {
      return thunkAPI.rejectWithValue(err.response.data.response.message);
    } else {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
})
