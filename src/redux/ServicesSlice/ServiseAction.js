import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendURL } from "../api/axios";
export const AddServices = createAsyncThunk(
    "Admin/CreateServices",
    async (formData, thunkAPI) => {
        try {
            const response = await axios({
                method: "post",
                url: `${backendURL}/admin/services`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: formData,
            });
            if (response) {
                return response;
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
export const getServices = createAsyncThunk(
    "/Admin/getUsers",
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${backendURL}/api/v1/users`);
        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data.message);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);
export const DeleteServices = createAsyncThunk(
    "Admin/DeleteService",
    async (ServicesID, thunkAPI) => {
        try {
            const response = await axios.delete(`${backendURL}/admin/DeleteServices/${ServicesID}`);
            if (response) {
                return response
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
