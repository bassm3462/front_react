import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendURL, token } from "../api/axios";
import axios from "axios";
export const UploadImageProduct = createAsyncThunk("Product/Upload/image", async ({ ProductID, formData }, thunkAPI) => {
    try {
        const response = await axios({
            method: "post",
            url: `${backendURL}/api/Employ/UploadImage?id=${ProductID}`,
            headers: {
                'Content-Type': 'multipart/form-data',
                "token": token
            },
            data: formData
        });
        if (response){
            return response.data
        }
        else{
            throw new Error("Error in Upload Image")
        }
    } catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
})
export const displayArrayImageProduct = createAsyncThunk("Image/arrayImage", async (ProductId, thunkAPI) => {
    try {
        const response = axios({
            method: "get", url: `${backendURL}/api/Employ/Product/arrayImage/${ProductId}`, headers: { Accept: 'application/json', "token": token }
            
        })
     if(response||response.data){
        return response
     }
    } catch (error) {
        if (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }

}})