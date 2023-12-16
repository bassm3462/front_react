import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EmployRegister } from "../../../redux/EmploySlice/EmployAction";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getDepartment } from "../../../redux/DepartmentSlice/departmentAction";
import { ColorButton } from "../../Config/Content";
import { AddBox } from "@mui/icons-material";
export default function AddEmploy() {
  const [show, setShow] = useState(false),
    [password, setPassword] = useState(""),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [user_type, setUserType] = useState(""),
    [Gender, setGender] = useState(""),
    [Department, setDepartment] = useState(""),
    [active,setActive]=          useState(""),
    [Phone, setPhone] = useState("");
    const handleCheckboxChange = (e) => {
        setActive(e.target.checked);
    };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append("name", name);
    formData.append("Phone", Phone);
    formData.append("Gender", Gender);
    formData.append("email", email);
    formData.append("Department",Department);
    formData.append("user_type", user_type);
    formData.append("password",password)
    formData.append("active", active?1:0);
    dispatch(
      EmployRegister(formData));
    setShow(false)
  };
  const handleClose = () => setShow(false);
  useEffect(() => {
    dispatch(getDepartment());
  }, []);
  const data = useSelector((state) => {
    return state.departments;
  });
  return (
    <>
      <ColorButton
        onClick={handleShow}
        variant="outlined"
        sx={{ mb: "3px" }}
        startIcon={<AddBox />}
      >
        ADD
      </ColorButton>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", zindex: 8, top: "30px" }}>
          <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <ToastContainer />
            <Form onSubmit={(e) => handleSubmit(e)}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  password
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  phone
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="phone..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-outline flex-fill mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={user_type}
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                >
                  <option selected>Open this select User type</option>
                  <option value={"Costumer"}>Costumer</option>
                  <option value={"Employ"}>Employ</option>
                </select>
              </div>
              <div className="d-flex flex-row align-items-center mb-0">
                <div className="form-outline flex-fill mb-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={Gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option selected>Open this select Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>
              <div className="form-outline flex-fill mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={Department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  <option selected>Open this to chose Department</option>
                  {data.departments &&
                    data.departments?.map((item, index) => {
                      return (
                        <option
                          key={item._id}
                          value={`${item._id}`}
                        >{`${item.name}`}</option>
                      );
                    })}
                </select>
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={active}
                  onChange={handleCheckboxChange}
                  id="flexCheckDefault"
                  require
                />
                <label className="form-check-label" for="flexCheckDefault">
                Code The Account
                </label>
              </div>
            </Form>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                // onClick={handleClose}
                onClick={(e) => handleSubmit(e)}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
