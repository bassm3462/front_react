import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { ColorLink } from "../../Config/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  displaySingleProduct,
  UploadImageProduct,
} from "../../../redux/ProductSlice/ProductAction";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { getSingleDepartment } from "../../../redux/DepartmentSlice/departmentAction";
import {info} from "../../../redux/api/axios"
export default function ProductDetails() {
  const { products } = useSelector((state) => {
    return state.products;
  });
  const { departments } = useSelector((state) => {
    return state.departments;
  });
  const Params = useParams();
  const ProductID = Params.id;
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  useEffect(() => {
    dispatch(displaySingleProduct(ProductID));
  }, []);
  useEffect(() => {
    dispatch(getSingleDepartment(info.Department));
  }, []);
  const navigate = useNavigate();
  const handback = () => {
    navigate("/Employ/Products/");
  };
  const handleImageChange=(e)=>{
    const files = Array.from(e.target.files);
//     files.forEach(file=>{
//       const render=new FileReader
//       render.readAsDataURL(file)
//       render.onloadend=()=>{
// setImage(oldArray=>[...oldArray,render.result])
//       }
//     })
    setImage(files)
  }
  const handlSubmit = (e) => {
    e.preventDefault(e);
    const formData = new FormData();
    image.forEach((image, i) => {
      formData.append(`image[${i}]`, image);
    });
    formData.append("image",image)
    dispatch(UploadImageProduct({ ProductID, formData }));
    // console.log(image);
    // for (const value of formData.values()) {
    //   console.log(value);}
    // setImage([]);
  };
  return (
    <section
      className="h-100 h-custom productDetails"
      style={{ backgroundColor: "#eee" }}
    >
      <MDBContainer className="py-3 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" />
                        {departments.name}(Product {products.name})
                      </a>
                    </MDBTypography>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <p className="mb-1">Add More Image To Product</p>
                        <p className="mb-0">You can upload 6 max images </p>
                      </div>
                      <div>
                        <img src={image} ></img>
                        <p>
                          <span className="text-muted">Price:</span>
                          <a href="#!" className="text-body">
                            ${products.price}
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="text-center">
                        <img
                          src={`http://localhost:4000/${products.image}`}
                          className="avatar img-circle img-thumbnail"
                          alt="avatar"
                          width={"250px"}
                          height={"250px"}
                        />
                        <div className="imageProduct">
                          <img
                            src={`http://localhost:4000/${products.image}`}
                            className=""
                            alt="avatar"
                          />
                          <img
                            src={`http://localhost:4000/${products.image}`}
                            className=""
                            alt="avatar"
                          />
                          <img
                            src={`http://localhost:4000/${products.image}`}
                            className=""
                            alt="avatar"
                          />
                        </div>
                        <h6>Upload a different photo...</h6>
                        <form onSubmit={(e) => handlSubmit(e)}>
                          <input
                            type="file"
                            className="form-control"
                          onChange={handleImageChange}
                          multiple
                          />
                        </form>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button
                          className="btn btn-dark "
                          onClick={(e) => handlSubmit(e)}
                        >
                          save image
                        </button>

                        <Button variant="outlined" onClick={handback}>
                          Back
                        </Button>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Product Details
                          </MDBTypography>
                          <MDBCardImage
                            src={`http://127.0.0.1:4000/${products.image}`}
                            fluid
                            className="rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>
                        <div className="mt-3">
                          <h6
                            className="small mb-2 "
                            style={{ marginBottom: "0px" }}
                          >
                            Product Title:
                          </h6>
                          <p className="mb-2 productDes">{products.name} </p>
                          <h6
                            className="small mt-3 "
                            style={{ marginBottom: "0px" }}
                          >
                            Product Category:
                          </h6>
                          <p className="mb-2 productDes">
                            {departments.Category}{" "}
                          </p>
                          <h6
                            className="small mt-3 "
                            style={{ marginBottom: "0px" }}
                          >
                            Product Description:
                          </h6>
                          <p className="mb-4 productDes">
                            {" "}
                            {products.description}
                          </p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Quantity available</p>
                          <p className="mb-2">
                            {products.quantity} from {products.name}
                          </p>
                        </div>
                        <ColorLink
                          variant="outlined"
                          sx={{
                            mb: "3px",
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            fontSize: "20px",
                          }}
                        >
                          <span>${products?.price}</span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </ColorLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
