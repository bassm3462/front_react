import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import {UpdateUser} from "../../../redux/userSlice/authActions"
import { useDispatch } from "react-redux";
import { Password } from "@mui/icons-material";
export default function Update() {
  const dispatch=useDispatch();
  const info =JSON.parse(localStorage.getItem("user"))
  const [name, setName]                      = useState(""),
        [email, setEmail]                    = useState(""),
        [password, setPassword]              = useState(""),
        [repeat_password, setRepatPassword]  = useState(""),
        [Phone, setPhone]                    = useState("");
        const handleSubmit=(e)=>{
          console.log("nnnnnnnn")
dispatch(UpdateUser(name,email,repeat_password,password,Phone))
        }
  return (
    <>
  <div className="container bootstrap snippets bootdey">
    <h1 className="text-primary">Edit Profile</h1>
    <hr />
    <div className="row">
      {/* left column */}
      <div className="col-md-3">
        <div className="text-center">
          <img
            src={`http://localhost:4000/${info.image}`}
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6>Upload a different photo...</h6>
          <input type="file" className="form-control" />
          <input type="hidden" value={info.image}></input>
        </div>
        <button className='btn btn-dark mt-1'>save image</button>
      </div>
      {/* edit form column */}
      <div className="col-md-9 personal-info">
        <h3>Personal info</h3>
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-lg-3 control-label">full name:</label>
            <div className="col-lg-8">
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e)=>(setName(e.target.value))}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label"> Emile:</label>
            <div className="col-lg-8">
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}
              />
            </div>
            </div>
          <div className="form-group">
            <label className="col-lg-3 control-label"> Phone:</label>
            <div className="col-lg-8">
              <input
                className="form-control"
                type="text"
                value={Phone}
                onChange={(e)=>(setPhone(e.target.value))}
              />
            </div>
            </div>
            <div className="form-group">
            <label className="col-lg-3 control-label"> Password:</label>
            <div className="col-lg-8">
              <input
                className="form-control"
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e)=>(setPassword(e.target.value))}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label"> repeat Password:</label>
            <div className="col-lg-8">
              <input
                className="form-control"
                type="password"
                placeholder=' repeat Password'
                value={repeat_password}
                onChange={(e)=>(setRepatPassword(e.target.value))}
              />
            </div>
          </div>
        <div>
          <button className='btn btn-primary mt-2' type="submit" onSubmit={(e)=>handleSubmit()}>save</button>
          <NavLink to="/information/User" className={"btn btn-secondary mt-2 ms-2"}> back</NavLink>
          </div>
        </form>
      </div>
    </div>
  </div>
  <hr />
</>

  );
}