import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDepartment,
  UpdateDepartment,
  UpdateFiLE,
} from "../../../redux/DepartmentSlice/departmentAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
export default function EditDepartment() {
  const dispatch = useDispatch();
  const Params = useParams();
  const [info, SetInfo] = useState("");
  const { isLoading, isSuccess, isError, message, departments } = useSelector(
    (state) => {
      return state.departments;
    }
  );
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState([]);
  const [imageEdit, setimageEdit] = useState("");
  const DepartmentID = Params.id;
  useEffect(() => {
    dispatch(getDepartment());
  }, [DepartmentID]);
  useEffect(() => {
    if (Array.isArray(departments)) {
      const dataEdit = departments.find((dep) => dep._id === DepartmentID);
      if (dataEdit !== undefined) {
        SetInfo(dataEdit);
        setName(dataEdit?.name);
        setCategory(dataEdit?.Category);
        setdescription(dataEdit?.description);
      }
    }
  }, [departments, DepartmentID]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateDepartment({ name, Category, description, DepartmentID }));
    console.log(DepartmentID);
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageEdit", imageEdit);
    formData.append("image", image);
    dispatch(UpdateFiLE({ formData, DepartmentID }));
    console.log(formData);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
    }
    console.log(message);
  }, [message]);
  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <ToastContainer />
        <h1 className="text-primary">Edit Department {info.name}</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              {isLoading ? (
                <ClipLoader
                  color="#36d7b7"
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <img
                  src={`http://localhost:4000/${info.image}`}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
              )}
              <form onSubmit={(e) => handleSubmitFile(e)}>
                <h6>Upload a different photo...</h6>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    if (e.target.files) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
                <input
                  type="hidden"
                  value={info.image}
                  onChange={(e) => setimageEdit(e.target.value)}
                ></input>
              </form>
            </div>
            <button
              className="btn btn-dark mt-1"
              type="submit"
              onClick={(e) => handleSubmitFile(e)}
            >
              save image
            </button>
          </div>

          <div className="col-md-9 personal-info">
            <h3>Personal info</h3>
            <form
              className="form-horizontal"
              role="form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="form-group">
                <label className="col-lg-3 control-label">
                  {" "}
                  Department name:
                </label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label"> Catogores:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="Category"
                    // defaultValue={info.Category}
                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label"> Description:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary mt-2"
                  type="submit"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  save
                </button>
                <NavLink
                  to="/admin/create"
                  className={"btn btn-secondary mt-2 ms-2"}
                >
                  {" "}
                  back
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
