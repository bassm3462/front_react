import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendURL, token } from "../api/axios";
import axios from "axios";

export const AddOffers = createAsyncThunk("/Offers/create", async ( formData , thunkAPI) => {
    try {
        const response = await axios({
            method: "post",
            url: `${backendURL}/api/Employ/Offers`,
            headers: {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                "token": token
            },
            data: formData
        });
        if (response || response?.data) {
            return response.data
        }
    } catch (error) {
        if (error || error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
});
export const getAllOffers= createAsyncThunk("GetALL/Offers",async(thunkAPI)=>{
    try {
        const response = await axios({
            method: "get",
            url: `${backendURL}/api/Employ/GetAllOffers`,
            headers: {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                "token": token
            },
        });
        if (response || response?.data) {
            return response.data
        }
    } catch (error) {
        if (error || error.response) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
});
