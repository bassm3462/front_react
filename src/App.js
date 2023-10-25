import React from "react";
import Login from "./Component/Auth/login";
import Register from "./Component/Auth/register";
import Home from "./Component/Costumer/home";
import Department from "./Component/adminUser/department/Department";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoutes from "./Component/middleware/praivetRout";
import Dashboards from "./Component/adminUser/dashbordAdmin";
import Employe from "./Component/adminUser/EmployeMange/Employe";
import Product from "./Component/Employ/Product/Products";
import ResatPassword from "./Component/Auth/Profile/ResatPassword";
import User from "./Component/Auth/Profile/User";
import Update from "./Component/Auth/Profile/UpdateUser";
import Employ from "./Component/Employ/Employ";
import ProductDetails from "./Component/Employ/Product/ProductDetails.jsx";
import AddProduct from "./Component/Employ/Product/AddProduct.jsx"
import Cameras from "./Component/adminUser/surifllinceCamera/Cameras.jsx"
import EditDepartment from "./Component/adminUser/department/EditDepartment.jsx"
import Order from "./Component/adminUser/Order/Order"
import AdminListProduct from "./Component/adminUser/Product/Product.jsx"
import Setting from "./Component/adminUser/Setting/Setting";
import ProductCostumer from "./Component/Costumer/Products/prouduct.jsx"
import ProductOverview from "./Component/Costumer/Products/ProductOverview";
import CardCostumer from "./Component/Costumer/Cart/Card"
import ChatUI from "./Component/Costumer/Chat/CHat.jsx"
import Offers from "./Component/Costumer/Offers/Offers";
import EmployOffers from "./Component/Employ/ADDOffers/Offers.jsx"
export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/User/home" element={<Home />} />
          <Route path="/admin/create" element={<Department />} />
          <Route path="/Admin/Dashboard" element={<Dashboards />} />
          <Route path="/admin/Employ" element={<Employe />} />
          <Route path="/Costumer/product/:id" element={<ProductCostumer />} />
          <Route path="/Information/user" element={<User />} />
          <Route path="/Information/Edit" element={<Update />} />
          <Route path="/Employ/Dashboard" element={<Employ />} />
          <Route path="/Employ/Products/" element={<Product />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="/Employ/Add/Products/" element={<AddProduct />} />
          <Route path="/Department/Edit/:id" element={<EditDepartment />} />
          <Route path="/admin/Camera/" element={<Cameras />} />
          <Route path="/admin/Order" element={<Order />} />
          <Route path="/admin/Product" element={<AdminListProduct />} />
          <Route path="/admin/Setting" element={<Setting />} />
          <Route path="/Costumer/ProductOverview" element={<ProductOverview />}></Route >
          <Route path="/Costumer/card" element={<CardCostumer />}></Route >
          <Route path="/Costumer/Chat/:id" element={<ChatUI />}></Route >
          <Route path="/Costumer/Offers" element={<Offers />}></Route >
          <Route path="/Employ/offers" element ={<EmployOffers/>}></Route>
        </Route>

        <Route path="/user/ResatPassword" element={<ResatPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
