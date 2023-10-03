import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/userSlice/authActions";
import { clearState } from "../../redux/userSlice/userSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Female } from "@mui/icons-material";
function Register() {
  const { isSuccess, isError, message } = useSelector((state) => state.user);
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepatPassword] = useState("");
  const [Phone, setPhone]        = useState("");
  const [Gender, setGender]      = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password, repeat_password,Phone,Gender }));
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(clearState());
    }if (isError) {
      toast.error(isError);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <ToastContainer />
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-3">
                        Sign up
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="your name"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your email"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="your password"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="repeat_password"
                              className="form-control"
                              value={repeat_password}
                              onChange={(e) => setRepatPassword(e.target.value)}
                              placeholder="confirm password"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="text"
                              name="repeat_password"
                              className="form-control"
                              value={Phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone number"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Phone
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              value={Gender}
                              onChange={e=>{setGender(e.target.value)}}
                            >
                              <option selected>Open this select Gender</option>
                              <option value={"Male"}>Male</option>
                              <option value={"Female"}>Female</option>
                            </select>
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Gender
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-1">
                          <p>I Already has account </p>
                          <Link to={"/"} className="ms-2">
                            Login
                          </Link>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onSubmit={(e) => handleSubmit(e)}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
