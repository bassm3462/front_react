import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL, info } from "../api/axios"
// register

const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password, repeat_password, Phone, Gender }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, email, password, repeat_password, Phone, Gender
        })
      }
      const response = await axios.post(
        `${backendURL}/api/signup`,
        { name, email, password, repeat_password, Phone, Gender },
        config
      )
      if (response) {
        return response.data.message
      }
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
        // console.log(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
        // console.log(error.message)
      }
    }
  }
)
// login
const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${backendURL}/api/login`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ email, password }),
      })
      if (response || response?.data) { return response.data }
    }
    catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message)
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  })
  export const gitSingleUser = createAsyncThunk(
    'auth/gitSingleUser',
    async (thunkAPI) => {
      try {
        const response = await axios({
          method: 'get',
          url: `${backendURL}/api/gitSingleUser/${info._id}`,
        })
        if (response || response?.data) { return response.data }
      }
      catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          console.log(error.response.data.message)
          return thunkAPI.rejectWithValue(error.response.data.message)
        } else {
          return thunkAPI.rejectWithValue(error.message)
        }
      }
    })
// update
const UpdateUser = createAsyncThunk(
  'auth/UPDATE',
  async (
    formData, thunkAPI) => {
    try {
      const response = await axios({
        method: "put", url: `${backendURL}/api/User/Update/:${info._id}`, headers: { 'Content-Type': 'application/json' },
        data: formData
      })
      if (response?.data) { return response.data }
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message)
      } else {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
export const UpdateFiLE = createAsyncThunk(
  'auth/UpdateFiLE',
  async (
    formData, thunkAPI) => {
    try {
      const response = await axios({
        method: "put",
        url: `${backendURL}/api/update_image_profile/${info._id}`,
        headers: { 
          'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data'
      },
        data: formData 
      })
      if (response?.data) { return response.data }
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message)
      } else {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)

const ChakEmail = createAsyncThunk(
  'auth/Check',
  async ({ email }, thunkAPI) => {
    try {
      const response = await axios({
        method: "post", url: `${backendURL}/api/users/forgot_password`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ email })
      })
      if (response?.data) { return response.data }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message)
      } else {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
export { registerUser, loginUser, UpdateUser, ChakEmail };