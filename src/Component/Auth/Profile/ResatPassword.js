import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import'../style/ResatPassword.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {ChakEmail} from "../../../redux/userSlice/authActions";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from "react-toastify";
import {clearState} from "../../../redux/userSlice/userSlice"

function ResatPassword() {
  const { isSuccess, isError, message } = useSelector((state) => state.user);
  const dispatch=useDispatch();
  const [email ,setEmail]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(ChakEmail({email}))
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(clearState());
    }
    if (isError) {
      toast.error(message);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  return (
    <div className='vh-100 position-relative'style={{ backgroundColor: "#eee" }}>
      <ToastContainer/>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <div className="position-relative container">
        <Form className=" "onSubmit={(e) => handleSubmit(e)} >
<h1 > Resat Password</h1>
      <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput1 ">
        <Form.Label>Pleas Enter Email address to Resat Password:</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
    </Form>
    <div className=" position">
        <Button variant="primary" className="me-3" type="submit" onClick={(e) => handleSubmit(e)}>Resat</Button>
        <NavLink  to="/"className={"btn btn-secondary"}>back</NavLink>
        </div>
        </div>
        </div>
    </div>
  )
}
export default ResatPassword