import React from "react";
import { ButtonClearState, ButtonSave } from "../../../Config/Content";
import { useState } from "react";
import {
  AddAboutUs,
  getAboutUs,
  editAbout,
  DeleteAbout,
} from "../../../../redux/AboutUsSlice/AboutAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Delete, KeyboardReturn } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
function AboutUS() {
  const { AboutD, isSuccess,message } = useSelector((state) => {
    return state.About;
  });
  const [About, setAbout] = useState("");
  const [open, setOpen] = useState(true);
  useEffect(()=>{
    if( AboutD  && AboutD.About){
      setAbout(AboutD.About)
      }
  },[])
  const dispatch = useDispatch();
  const HandlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("About", About);
    dispatch(AddAboutUs(formData));
  };
  const AboutID = AboutD._id;
  const HandlEdit = () => {
    setOpen(!open);
  };
  const SaveCHange = () => {
    const formData = new FormData();
    formData.append("About", About);
    dispatch(editAbout({ AboutID, formData }));
  };
  const handleDelete=()=>{
    dispatch(DeleteAbout(AboutID))
  }
  useEffect(() => {
    dispatch(getAboutUs());
  }, [About]);
  useEffect(()=>{
    if( isSuccess ){
      toast.success(message)
    }
      
  },[])
  return (
    <div className="p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Talk about the site</h2>
      {/* { ToastContainer} */}
      <p className="mt-0 mb-20 c-grey fs-15">
        Control The about What is the work of this website and its creation?
      </p>
      <div className="mb-15 ">
        <div>
          <span>Website about</span>
        </div>
      </div>
      {!open ? (
        <form onSubmit={(e) => HandlSubmit(e)}>
          <textarea
            className="form-control close-message p-10 rad-6  w-full"
            placeholder="Close Message Content"
            value={About}
            rows="4"
            cols="50"
            name="About"
            onChange={(e) => setAbout(e.target.value)}
            required
          />
          <button
            type="submit"
            onClick={(e) => SaveCHange(e)}
            className="btn btn-primary mt-3"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <p>{AboutD.About}</p>
        </div>
      )}
      <div className="mt-3">
        {AboutD ? (
         !open ? (
            <Button
              variant="outlined"
              onClick={HandlEdit}
              startIcon={<KeyboardReturn />}
            >
              Cancel To Edit
            </Button>
           ) : ( 
            <div className="d-flex justify-content-between align-center">
            <ButtonClearState onClick={HandlEdit}>Edit About</ButtonClearState>
            <Button
              variant="outlined"
              onClick={handleDelete}
              startIcon={<Delete />}
            >
             Delete
            </Button>
            </div>
          )
        ) : (
          <ButtonSave
            className="me-3"
            type="submit"
            onSubmit={(e) => HandlSubmit(e)}
          >
            Save
          </ButtonSave>
        )}
      </div>
    </div>
  );
}
export default AboutUS;
