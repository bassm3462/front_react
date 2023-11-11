import React, { useState, useEffect } from "react";
import "../css/Product.css";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveProduct,
  displayProduct,
} from "../../../redux/ProductSlice/ProductAction";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Delete, Edit } from "@mui/icons-material";
import { backendURL } from "../../../redux/api/axios";
function ProductModel() {
  const { products } = useSelector((state) => {
    return state.products;
  });
  console.log(products);
  const ITEM_HEIGHT = 48;
  const dispatch = useDispatch();
  const info = JSON.parse(localStorage.getItem("user"));
  const DepartmentID = info.Department;
  useEffect(() => {
    dispatch(displayProduct(DepartmentID));
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeProduct = (productID) => {
    dispatch(RemoveProduct(productID));
  };
  const EditProduct = (productID) => {
  
  };
  return (
    <div className="articles" id="articles">
      <div className="container11">
        {products.length > 0 ? (
          Array.isArray(products) ? (
            products.map(({ _id, image, name }) => (
              <div className="box" key={_id}>
                <img src={`${backendURL}/${image}`} alt="" />
                <div className="content">
                  <NavLink className="test" to={`/product/details/${_id}`}>
                    {name}
                  </NavLink>
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose} sx={{ display: "block" }}>
                        <div>
                          {" "}
                          <IconButton onClick={() => removeProduct(_id)}>
                            <Delete />{" "}
                          </IconButton>
                          <span>Delete</span>
                          <br />
                        </div>
                        <div>
                          {" "}
                          <IconButton onClick={() => EditProduct(_id)}>
                            <Edit />{" "}
                          </IconButton>
                          <span>Edit</span>
                        </div>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No Product</span>
          )
        ) : (
          <center>No Product</center>
        )}
      </div>
    </div>
  );
}
export default ProductModel;
