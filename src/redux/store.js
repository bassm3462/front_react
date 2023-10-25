import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlice/userSlice";
import EmploySlice from "./EmploySlice/EmploySlice";
import DepartmentSlice from "./DepartmentSlice/departmentSlice"
import ProductSlice from "./ProductSlice/ProductSlice"
import ImageState from "./UploadeArrayImageSlice/ImageSLice"
import OrderState from "./CartSlice/CardSlice"
import AboutState from "./AboutUsSlice/AboutSlice"
import ServicesState from "./ServicesSlice/ServiceSlice"
import ChatState from "./ChatSlice/ChatSlice"
import OffersSlice from "./Offers/OffersSlice";
const enhance= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = configureStore({
    reducer: {
        user: userSlice,
        Employ:EmploySlice,
        departments:DepartmentSlice,
        products:ProductSlice,
        images:ImageState,
        OrderS:OrderState,
        About:AboutState,
        Services:ServicesState,
        Chat:ChatState,
        Offers:OffersSlice

    }
},enhance())
export default store;