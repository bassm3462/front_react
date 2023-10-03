import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendURL, token } from "../api/axios";
import axios from "axios";
export const createProduct = createAsyncThunk("product/create", async ({ formData }, thunkAPI) => {
    try {
        const response = await axios({
            method: "post",
            url: `${backendURL}/api/Employ/create_Product`,
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
})
export const displayProduct = createAsyncThunk("Products/display/", async (DepartmentID, thunkAPI) => {
    try {
        const response = axios({
            method: "get",
            url: `${backendURL}/api/Employ/Data/${DepartmentID}`,
            headers: {
                'Accept': 'application/json', "token": `${token}`
            }
        })
        if (response) {
            return response
        }
    }
    catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
})
export const displaySingleProduct = createAsyncThunk("Product/display/Product", async (ProductID, thunkAPI) => {
    try {

        const response = axios({
            method: "get",
            url: `${backendURL}/api/Employ/Data/Product/${ProductID}`,
            headers:
            {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                "token": token
            }
        })
        if (response) {
            return response
        }
    }
    catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
})
export const UploadImageProduct = createAsyncThunk("Product/Upload/image", async ({ ProductID, formData }, thunkAPI) => {
    try {
        if (formData) {
            for (const value of formData.values()) {
                console.log(value);
            }
        }
        const response = await axios({
            method: "post",
            url: `${backendURL}/api/Employ/UploadImage?id=${ProductID}`,
            headers: {
                // Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                "token": token
            },
            data: { formData }
        });
        if (response || response?.data) {
            return response.data
        }
    } catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }

    }
})
export const DispalyProductAndDepartment = createAsyncThunk("Admin/productList", async (thunkAPI) => {
    try {

        const response = axios({
            method: "get",
            url: `${backendURL}/api/Admin/productList`,
            headers:
            {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                "token": token
            }
        })
        if (response?.data) {
            return response.data
        }
    }
    catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
})