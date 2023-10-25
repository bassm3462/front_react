import { Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ChatTransmit from "./ChatTransmit";
import ChatResive from "./ChatRecive";
import { useDispatch } from "react-redux";
import { AddMessage } from "../../../redux/ChatSlice/ChatAction";
import { useParams } from "react-router";
import { useState } from "react";
export default function ChatUI() {
  const dispatch = useDispatch();
  const Param = useParams();
  const DepartmentID = Param.id;
  const [Message, SetMessage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("message", Message);
    dispatch(AddMessage({ formData, DepartmentID }));
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <ul className="list-unstyled">
          <li className="d-flex justify-content-between mb-4">
            <ChatResive />
          </li>
          <li className="d-flex justify-content-between mb-4">
            <ChatTransmit />
          </li>
          <li className="d-flex justify-content-between mb-4">
            <ChatResive />
          </li>
          <li className="bg-white mb-3">
            <div className="form-outline">
              <form>
                <textarea
                  className="form-control "
                  id="textAreaExample2"
                  placeholder="Write Message"
                  rows={4}
                  defaultValue={""}
                />
              </form>
            </div>
          </li>
          <Button
            variant="contained"
            className="btn-rounded float-end"
            onClick={(e) => handleSubmit(e)}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </ul>
      </div>
    </section>
  );
}
