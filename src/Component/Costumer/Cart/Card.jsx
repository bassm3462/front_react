import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import "../style/card.css";
import {  useNavigate } from "react-router-dom";
import {  Badge, IconButton } from "@mui/material";
import { Add, ArrowBack, Remove, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import moment from "moment/moment";
import {ButtonClearState} from "../../Config/Content"
import { ToastContainer } from "react-toastify";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  ClearCard,
  getTotals
} from "../../../redux/CartSlice/CardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function Card() {
  const { cartItem, cartTotalAmount,cartTotalQuantity } = useSelector((state) => {
    return state.OrderS;
  });
  const dispatch = useDispatch();
  const [Date, setDate] = useState("");
  useEffect(() => {
    const formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    setDate(formattedDate);
  }, [Date]);
  const Navigate = useNavigate();
  const handlBack = (id) => {
    window.history.back(-1);
  };
  const handlAddTocart = (products) => {
    dispatch(addToCart(products));
  };
  const handleDecreaseCard = (products) => {
    dispatch(decreaseCart(products));
  };
  const removeFromThcard = (products) => {
    dispatch(removeFromCart(products));
  };
  const clearAllProduct=()=>{
    dispatch(ClearCard())
  }
  useEffect(()=>{
    dispatch(getTotals())
  },[cartItem ,dispatch])
  return (
    <section className="h-100 gradient-custom">
      <ToastContainer/>
      <MDBContainer className="py-5 h-100 ">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3 d-flex justify-content-between align-items-center">
                <MDBTypography tag="h5" className="mb-0">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handlBack}
                  >
                    <ArrowBack />
                  </IconButton>
                  Back To Page Product
                </MDBTypography>
                <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cartTotalQuantity} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
              </MDBCardHeader>
              <MDBCardBody className="">
                {cartItem.length > 0 ? (
                  Array.isArray ? (
                    cartItem?.map((products) => {
                      return (
                        <MDBRow key={products._id}>
                          <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                            <MDBRipple
                              rippleTag="div"
                              rippleColor="light"
                              className="bg-image rounded hover-zoom hover-overlay"
                            >
                              <img
                                src={`http://127.0.0.1:4000/${products.image}`}
                                className="w-100"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCol>
                          <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                            <p>
                              <strong>{products.name}</strong>
                            </p>
                            <p>
                              <strong>Price:${products.price}</strong>
                            </p>
                            <button
                              onClick={() => removeFromThcard(products)}
                              className="buttonRemoveFromCard"
                            >
                              Remove from cart
                            </button>
                          </MDBCol>

                          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              {/* button decrement */}
                              <button
                                className="btn btn-dark me-2"
                                onClick={() => handleDecreaseCard(products)}
                              >
                                <Remove />
                              </button>
                              <div className="boxProductNumber">
                                {products.count}
                              </div>
                              {/* button increment */}
                              <button
                                className="btn btn-dark ms-2"
                                onClick={() => handlAddTocart(products)}
                              >
                                <Add />
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>Total Price:${products.price * products.count}</strong>
                            </p>
                          </MDBCol>
                        </MDBRow>
                      );
                    })
                  ) : (
                    <span>no product select</span>
                  )
                ) : (
                  <div className=""><div className="NoProductINshopping"><div className="centerNoShopping">
                    <img src="/image/no-shopping-cart.png" alt="" srcset="" />
                   <p className="mt-5 fs-3 text"> no product select</p></div></div></div>
                )}
              </MDBCardBody>
          <ButtonClearState  variant="outlined"onClick={clearAllProduct} >Clear cart shop</ButtonClearState>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">{`${Date}`}</p>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>{cartTotalAmount}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
                <ButtonClearState block size="lg">
                  Go to checkout
                </ButtonClearState>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
