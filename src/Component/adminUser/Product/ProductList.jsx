import React, { useState, useEffect } from "react";
import { DispalyProductAndDepartment } from "../../../redux/ProductSlice/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { backendURL } from "../../../redux/api/axios";
function ProductList() {
  const { products } = useSelector((state) => {
    return state.products;
  });
  console.log(products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DispalyProductAndDepartment());
  }, []);
  return (
    <div
      className="projects p-20 bg-white rad-10 m-20 container"
      style={{ margin: "auto" }}
    >
      <h2 className="mt-0 mb-20">Product List </h2>
      <div className="responsive-table">
        <table className="fs-15 w-full">
          <thead>
            <tr>
              <td>Title</td>
              <td>Department Nme</td>
              <td>Price</td>
              <td>Product quantity </td>
              <td>Available product</td>
              <td>Image of product</td>
              <td>Product state</td>

              
            </tr>
          </thead>
          <tbody>
            {Array.isArray?
            products?.map((product) => (
             <tr>
             <td>{product.name}</td>
             <td>{product.departmentID.name}</td>
             <td>{product.price}</td>
             <td>{product.quantity} </td>
             <td>{product.Available} </td>
             <td>
               <div>
                <img src={`${backendURL}/${product.image}`} alt="" />
               </div>
             </td>
             <td>
               <span className="label btn-shape bg-orange c-white">
                 Pending
               </span>
             </td>
           </tr>)):<span>is array</span> }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
