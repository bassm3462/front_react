import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddOffers } from "../../../redux/Offers/OfferAction";
import { json } from "react-router";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function Module() {
  const info = JSON.parse(localStorage.getItem("user"));
  const Department = info.Department;
  const [open, setOpen] = React.useState(false),
    [Title, setTitle] = React.useState(""),
    [description, setDescrption] = React.useState(""),
    [quantity, setQuantity] = React.useState(""),
    [price, setPrice] = React.useState(""),
    [Discount, setDiscount] = React.useState("1"),
    [image, setImage] = useState([]),
    [DepartmentID, setDepartmentID] = useState(Department);
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    const formData = new FormData();
    formData.append("Title", Title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discount", Discount);
    formData.append("DepartmentID", DepartmentID);
    formData.append("image", image);
    console.log(image);
    console.log(Department);
    dispatch(AddOffers(formData));
    setDescrption("");
    setTitle("");
    setPrice("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Offers
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add OFFers"}</DialogTitle>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: "10px",
          }}
          component="form"
          onSubmit={(e) => HandleSubmit(e)}
        >
          <TextField
            fullWidth
            label="Title"
            id="fullWidth"
            className="mb-3"
            value={Title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Description"
            id="fullWidth"
            className="mb-3"
            value={description}
            onChange={(e) => setDescrption(e.target.value)}
          />
          <TextField
            fullWidth
            label="Price"
            id="fullWidth"
            className="mb-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          
          <TextField
            fullWidth
            label="DisCount"
            id="fullWidth"
            className="mb-3"
            value={Discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <input
            type="hidden"
            name=""
            value={DepartmentID}
            onChange={(e) => setDepartmentID(e.target.value)}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </Button>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={(e) => HandleSubmit(e)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
