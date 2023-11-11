import "../../Costumer/style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {  NavLink,  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@mui/material";
import { backendURL } from "../../../redux/api/axios";
function Department() {
  const [data, setData] = useState("");
  const [department, setDpartment] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios({
        method: "get",
        headers: {
          token: localStorage.getItem("token"),
        },
        url: `${backendURL}/api/dashboard`,
      }).then((response) => {
        setData(response.data.response);
      });
    } else {
    }
  }, []);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${backendURL}/api/Department/show`,
    })
      .then((response) => {
        console.log(response.data.response);
        setDpartment(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="team" id="team">
        <h2 className="main-title"></h2>
        <div className="container">
          {department.map(({ _id, image, name, description, Category }) => {
            return (
              <div className="box" key={_id}>
                <div className="data">
                  <NavLink to={`/Costumer/product/${_id}`}>
                    <img src={`${backendURL}/${image}`} alt="" />
                  </NavLink>
                  <div className="social">
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={faEnvelope} color="" />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={faFacebook} />
                      </i>
                    </a>
                    <a href="#">
                      <i>
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </i>
                    </a>
                  </div>
                </div>
                <Typography component={"div"} className="info">
                  <h3>{name}</h3>
                  <p>{Category}</p>
                  <Typography sx={{ width: "100px" }}>{description}</Typography>
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Department;
