import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlice/userSlice";
import EmploySlice from "./EmploySlice/EmploySlice";
import DepartmentSlice from "./DepartmentSlice/departmentSlice"
import ProductSlice from "./ProductSlice/ProductSlice"
const enhance= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = configureStore({
    reducer: {
        user: userSlice,
        Employ:EmploySlice,
        departments:DepartmentSlice,
        products:ProductSlice
    }
},enhance())
export default store;