import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { UpdateUser } from "../../../redux/userSlice/authActions"
import { useDispatch } from "react-redux";
export default function Update() {
  const dispatch = useDispatch();
  const info = JSON.parse(localStorage.getItem("user"))
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [repeat_password, setRepatPassword] = useState(""),
    [Phone, setPhone] = useState(""),
    [image,SetImage]=useState([]),
    [imageEdit,setImageEdit]=useState("");
  useEffect(() => {
    if (info) {
      setName(info?.name);
      setEmail(info?.email);
      setPhone(info?.Phone)
      setPassword(info?.password)
      setRepatPassword(info?.password)
      setImageEdit(info.image)
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDate = new FormData()
    formDate.append('name', name)
    formDate.append('email', email)
    formDate.append('Phone', Phone)
    formDate.append("repeat_password", repeat_password)
    formDate.append("password", password)
    dispatch(UpdateUser(formDate))
  }
  const handleSubmitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageEdit", imageEdit);
    formData.append("image", image);
    // dispatch(UpdateFiLE({ formData }));
    console.log(formData);
  };
  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success(message);
  //   }
  //   console.log(message);
  // }, [message]);
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
              <form onSubmit={(e) => handleSubmitFile(e)}>
                <h6>Upload a different photo...</h6>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    if (e.target.files) {
                      SetImage(e.target.files[0]);
                    }
                  }}
                />
                <input
                  type="hidden"
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
                ></input>
              </form>
            </div>
            <button className='btn btn-dark mt-1'>save image</button>
          </div>
          {/* edit form column */}
          <div className="col-md-9 personal-info">
            <h3>Personal info</h3>
            <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label className="col-lg-3 control-label">full name:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => (setName(e.target.value))}
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
                    onChange={(e) => (setEmail(e.target.value))}
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
                    onChange={(e) => (setPhone(e.target.value))}
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
                    onChange={(e) => (setPassword(e.target.value))}
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
                    onChange={(e) => (setRepatPassword(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <button className='btn btn-primary mt-2' type="submit" onSubmit={(e) => handleSubmit(e)}>save</button>
                <NavLink to="/information/User" className="btn btn-secondary mt-2 ms-2"> back</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>

  );
}