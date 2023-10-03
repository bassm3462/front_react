import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import { ColorButton } from "../../Config/Content"
export default function Modal() {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("Category", Category);
    formData.append("description", description);
    formData.append("image", image);
    const configuration = {
      method: "POST",
      url: "http://localhost:4000/api//Department/Create",
      data: formData,
      Headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axios(configuration)
      .then((response) => {
        console.log(response)
        console.log(response.data);
        setMessage(toast(response.data.message));
      })
      .catch((error) => {
        setMessage(toast.error(error.response.data.message));
      });
    setBasicModal(!basicModal);
  };
  const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
      {/* <div>{message}</div>  */}
      <ToastContainer />
      <ColorButton onClick={toggleShow} variant="outlined" sx={{ mb: "3px" }} startIcon={<AddBox />}>
        ADD
      </ColorButton>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {" "}
              <div className="card">
                <div className="card-header py-2">
                  <h3 className="card-title">Add New Department</h3>
                </div>
                <div className="card-body mt-3">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="name">Department Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Department Name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="category">Department Category</label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Department"
                        className="form-control"
                        value={Category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="category">Department Description</label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3 mb-3">
                      <input
                        type="file"
                        name="image"
                        onChange={(e) => {
                          if (e.target.files) {
                            setImage(e.target.files[0])
                          }
                        }
                        }
                      />
                    </div>

                  </form>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <Button variant="contained" sx={{ mr: "6px" }} onClick={(e) => handleSubmit(e)} endIcon={<SendIcon />}>
                Send
              </Button>
              <Button variant="outlined" onClick={toggleShow}>Outlined</Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
