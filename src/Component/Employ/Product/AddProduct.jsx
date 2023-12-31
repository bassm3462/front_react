import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { getDepartment } from "../../../redux/DepartmentSlice/departmentAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {createProduct} from "../../../redux/ProductSlice/ProductAction"
import { set } from "react-hook-form";
export default function AddProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartment());
  }, []);
  const data = useSelector((state) => {
    return state.departments;
  });
  const info=JSON.parse(localStorage.getItem("user"));
  const [departmentID, setDepartment] = useState(info.Department);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [Details,setDetails]=useState(null)
  const handlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(image)
    formData.append("image", image);
    formData.append("Details", Details);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("departmentID",departmentID)
    dispatch(createProduct({formData}))
    setName("")
    setDescription("")
    setPrice("")
    setQuantity("")
  };
  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary">Products</h1>
        <img src={`image/${image}`}alt="" srcset="" />
        <hr />
        <div className="row">
          {/* left column */}
          <div className="col-md-3">
            <div className="text-center">
              <img
                src="/image/alexander-andrews-BX4Q0gojWAs-unsplash.jpg"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>
          {/* edit form column */}
          <div className="col-md-9 personal-info">
            <h3>Product Information </h3>
            <form
              className="form-horizontal"
              role="form"
              onSubmit={(e) => handlSubmit(e)}
            >
              <div className="form-group">
                <label className="col-lg-3 control-label">Product name:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Description:</label>
                <div className="col-lg-8">
                  <textarea
                    className="form-control"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label"> Quantity: </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
            
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">
                  {" "}
                  Product Price:{" "}
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            
              <input
                  type="hidden"
                  value={departmentID}
                  onChange={(e) => setDepartment(e.target.value)}
                ></input>
              <div>
                <button
                  className="btn btn-primary mt-2"
                  onSubmit={(e) => handlSubmit(e)}
                >
                  save
                </button>
                <NavLink
                  to="/Employ/Products/"
                  className={"btn btn-secondary mt-2 ms-2"}
                >
                  {" "}
                  back
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
