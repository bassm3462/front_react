import { createSlice,  } from "@reduxjs/toolkit";
import { registerUser, loginUser, UpdateUser,ChakEmail } from "./authActions"
export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    Rol:null,
    code:false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {

    register: (state, action) => {
      state.user = action.payload;
    },
    UpdateUser: (state, action) => {

    },
    DeleteUser: (state, action) => {

    },
    logout: (state, action) => {
      localStorage.clear();
        window.location.reload(false);
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.isError = null
      })
      .addCase(registerUser.fulfilled, (state, payload) => {
        state.loading = false
        state.isSuccess = true // registration isSuccessful
        state.message = payload.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.isError = action.payload
        state.message = action.payload
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.isError = null
      })
      .addCase(loginUser.fulfilled, (state, {payload:{dataobj,message,token}}) => {
        state.isError=false
        state.isSuccess = true
        state.message = message
        localStorage.setItem("user",JSON.stringify(dataobj))
        state.Rol=dataobj.user_type
        state.code=dataobj.code
        localStorage.setItem("token",token)})
      .addCase(loginUser.rejected, (state, action) => {
        console.log('error', action);
        state.loading = false
        state.isError = action.payload
      })
      .addCase(UpdateUser.pending, (state) => {
        state.loading = true
        state.isError = null
      })
      .addCase(UpdateUser.fulfilled, (state, {payload,dataobj}) => {
        state.loading = false
        state.isSuccess = true
        state.message = payload
        localStorage.setItem("user11",JSON.stringify(dataobj))
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.loading = false
        state.isError = action.payload
        state.message = action.payload
      })
      .addCase(ChakEmail.pending, (state) => {
        state.loading = true
        state.isError = null
      })
      .addCase(ChakEmail.fulfilled, (state, {payload}) => {
        state.loading = false
        state.isSuccess = true
        state.message = payload.message
      })
      .addCase(ChakEmail.rejected, (state, {payload}) => {
        state.loading = false
        state.isSuccess=false
        state.isError = true
        state.message =payload
      })
  }
}
)
export default userSlice.reducer
export const { clearState, login,logout } = userSlice.actions;
export const userSelector = (state) => state.user;
