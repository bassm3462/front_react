import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { UpdateUser, UpdateFiLE,gitSingleUser } from "../../../redux/userSlice/authActions"
import { useDispatch,useSelector } from "react-redux";
import { backendURL } from "../../../redux/api/axios";
import { ToastContainer, toast } from "react-toastify";
export default function Update() {
  const dispatch = useDispatch();
  const { isSuccessMessage, isError, message,data } = useSelector((state) => {
    return state.user;
  });
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [repeat_password, setRepatPassword] = useState(""),
    [Phone, setPhone] = useState(""),
    [image, SetImage] = useState([]),
    [imageEdit, setImageEdit] = useState("");
  useEffect(() => {
    if (data) {
      setName(data?.name);
      setEmail(data?.email);
      setPhone(data?.Phone)
      setPassword("")
      setRepatPassword("")
      setImageEdit(data.image)
    }
  }, [])
  // update information user only without image 
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
  console.log(message);
  // upload image profile update image only
    const handleSubmitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageEdit", imageEdit);
    formData.append("image", image);
    dispatch(UpdateFiLE(formData));
  
  };
  useEffect(()=>{
    dispatch(gitSingleUser())
  },[dispatch, image,imageEdit])
  if(isSuccessMessage){
  toast.success(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    closeOnClick: true,

  })
}
if(isError){
  console.log("errorooro");
  toast.error(`${message}`)
}
  return (
    <>
    <ToastContainer/>
      <div className="container bootstrap snippets bootdey">
        <h1 className="text-primary">Edit Profile</h1>
        <hr />
        <div className="row">
          {/* left column */}
          <div className="col-md-3">
            <div className="text-center">
              <img
                src={`${backendURL}/${data.image}`}
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <form onSubmit={(e) => handleSubmitFile(e)}>
                <h6>Upload a photo...</h6>
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
            <button className='btn btn-dark mt-1'
            onClick={(e)=>handleSubmitFile(e)}
            >save image</button>
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