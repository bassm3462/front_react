import { createSlice } from "@reduxjs/toolkit";
import { AddMessage, getMessage,} from "./ChatAction";
const ChatState = createSlice({
  name: "Chat",
  initialState: {
    ChatMessage: [],
    isError: false,
    isSuccess: false,
    isLoading: null,
    message: "",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddMessage.fulfilled, (state, { payload }) => {
        state.departments = payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(AddMessage.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = "error";
      });
    builder
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessage.fulfilled, (state, { payload:{response} }) => {
        state.AboutD = response;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getMessage.rejected, (state, { payload }) => {
        state.isError = true;
        state.message = "error";
      })
  },
});
export default ChatState.reducer
export const userSelector = (state) => state.About;
