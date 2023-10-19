import React, { useState, useEffect } from "react";
import "../css/Product.css";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { displayProduct } from "../../../redux/ProductSlice/ProductAction";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Delete, Edit } from "@mui/icons-material";
function ProductModel() {
  const {  products } = useSelector((state) => {
    return state.products;
  });
  console.log(products);
  const options = [
    { text: "Delete", Icon: <Delete /> },
    { text: "Edit", Icon: <Edit /> },
  ];
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
  return (
    <div className="articles" id="articles">
      <div className="container11">
        {Array.isArray(products) ? (
          products.map(({ _id, image, name, }) => (
            <div className="box" key={_id}>
              <img src={`http://127.0.0.1:4000/${image}`} alt="" />
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
                    {options.map((option) => (
                      <MenuItem
                        selected={option === "Edit"}
                        onClick={handleClose}
                      >
                        <IconButton key={option.text}>{option.Icon}</IconButton>
                        {option.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span>No Product</span>
        )}
      </div>
    </div>
  );
}
export default ProductModel;
