import React, { useState, useEffect } from "react";
// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice/authActions";
import { ColorButton } from "../Config/Content";
import "./style/PageLogo.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigateto = useNavigate();
  const { isSuccess, isError, message, Rol, code } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      if (code === true) {
        if (Rol === "Costumer") {
          setTimeout(() => {
            Navigateto("/User/home");
          }, 500)
        } else if (Rol === "Employ") {
          setTimeout(() => {
            Navigateto("/Employ/Dashboard");
          }, 500)
        }
        else {
          setTimeout(() => {
            Navigateto("/Admin/Dashboard");
          }, 500)
        }
      }
    }
    if (isError) {
      console.log("error");
      toast.error(isError);
      // dispatch(clearState());
    }
  }, [isSuccess, isError]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <section className="vh-100  gradient-custom">

        <ToastContainer />
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {
              loading ?
                <>
                  <img src="/image/image.png" alt="logo" className='ImageLogostart' />
                  <div className="typewriter">
                    <h2 className="text-uppercase " style={{ direction: "rtl" }}> مرحبا بك في منتجات اور</h2>
                  </div>
                </>
                :
                <>
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: 25 }}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-3">
                              Login
                            </p>
                            <form
                              className="mx-1 mx-md-4"
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className="d-flex flex-row align-items-center mb-2">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                  <label
                                    className="form-label"
                                    htmlFor="form3Example3c"
                                  >
                                    Your Email
                                  </label>
                                  <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Email"
                                  />

                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-2">
                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                  <label
                                    className="form-label"
                                    htmlFor="form3Example4c"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                  />

                                </div>
                              </div>
                              <div className="form-check d-flex  mb-1">
                                <Link to="/register" className="">Register</Link>
                              </div>
                              <div className="form-check d-flex  ">
                                <Link to="/user/ResatPassword" className="">Reset password </Link>
                              </div>
                              <div className="mb-4">
                                <ColorButton
                                  type="submit"
                                  style={{ maxWidth: "100%", margin: 'auto', width: "100%", height: "auto" }}
                                  onClick={(e) => handleSubmit(e)}
                                >
                                  login
                                </ColorButton>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="/image/image.png"
                              style={{ margin: "auto", maxWidth: "80%" }}
                              alt="Description of the image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
            }
          </div>

        </div>


      </section>
    </>
  );
}
export default Login;
