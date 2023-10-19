import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Product.css";
import { Box, Button, IconButton } from "@mui/material";
import { displaySingleProduct } from "../../../redux/ProductSlice/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { addToCart } from "../../../redux/CartSlice/CardSlice";
import HeaderProduct from "../header/headerProduct";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Badge } from "react-bootstrap";
import { ArrowBack, ArrowCircleLeft, ArrowCircleLeftOutlined, ShoppingCart } from "@mui/icons-material";
import { getTotals } from "../../../redux/CartSlice/CardSlice";
import { Link } from "react-router-dom";
const ProductOverview = () => {
  const { cartItem, cartTotalQuantity } = useSelector((state) => {
    return state.OrderS;
  });
  const dispatch = useDispatch();
  const { products } = useSelector((state) => {
    return state.products;
  });
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  console.log(query.get("idProduct"));
  useEffect(() => {
    dispatch(displaySingleProduct(query.get("idProduct")));
  }, []);
  const handlAddTocart = (products) => {
    dispatch(addToCart(products));
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItem, dispatch]);
  const handlBack=()=>{
    window.history.back(-1);
  }
  const handlCard=()=>{
    // window.history("/Costumer/Card")
  }
  console.log("count",cartTotalQuantity);
  return (
    <>
      {/* <HeaderProduct/> */}
      <section className="">
        <ToastContainer />
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between">
                  <Button className=""onClick={handlBack}><span className="me-2"><ArrowCircleLeftOutlined/></span>continuo to shop</Button>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    onClick={handlCard}
                  >
                   <Link to="/Costumer/Card"> <Badge badgeContent={cartTotalQuantity} color="error">
                <span className="me-2">{cartTotalQuantity}</span>

                      <ShoppingCart />
                    </Badge></Link>
                  </IconButton>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="main-image">
                      {" "}
                      <img
                        className=" center"
                        src={`http://127.0.0.1:4000/${products.image}`}
                        alt="Blue Jeans Jacket"
                      />
                    </div>
                    <div className="centerimage">
                      <div className=" dispalyImageProduct">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            width={"200px"}
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            width={"200px"}
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            width={"200px"}
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">{products.name}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${products.price}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Category
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Price</strong>
                      </div>
                      <span>
                        <strong>${products.price}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="addtocard">
                    <button
                      type="button"
                      onClick={() => handlAddTocart(products)}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Add To Card
                    </button>
                  </div>
                  <hr />
                  <Box className="productDescription">
                    <h6>Description</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas quasi ut nobis voluptatum doloremque commodi
                      asperiores iure
                    </p>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductOverview;
