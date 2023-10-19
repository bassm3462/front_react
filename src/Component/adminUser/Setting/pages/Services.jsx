import { ButtonSave } from "../../../Config/Content";
import { AddServices } from "../../../../redux/ServicesSlice/ServiseAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Services() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handlSubmit = () => {
    dispatch(AddServices());
  };
  return (
    <div className="p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Company services</h2>
      <p className="mt-0 mb-20 c-grey fs-15">
        General Information About Your Account
      </p>
      <form action="">
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-10" htmlFor="first">
            Title Service
          </label>
          <input
            className="form-control  p-10 "
            type="text"
            id="first"
            placeholder="Title Service"
          />
        </div>
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-3" htmlFor="last">
            Description
          </label>
          <textarea
            className=" form-control close-message p-10 rad-6   "
            id="last"
            type="text"
            placeholder="Description"
          />
        </div>
        <div>
          <label className="fs-14 c-grey d-block mb-3" htmlFor="file">
            Upload Image
          </label>
          <input className=" form-control  p-10  " type="file" />
          <div className="mt-3">
            <ButtonSave className="me-3">Save</ButtonSave>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Services;
