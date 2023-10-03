import '../../style/home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect, NavLink,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 
import { Typography } from '@mui/material';
function Department() {
  const [data, setData] = useState("");
  const [department, setDpartment] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios({
        method: 'get',
        headers: {
          'token':localStorage.getItem("token"),
        },
        url: "http://localhost:4000/api/dashboard"
      }).then(response => {
        setData(response.data.response)
      })
    }
    else {
    }
  }, [])
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4000/api/Department/show",
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
      {/* department of electronic shop */}
      <div className="team" id="team">
        <h2 className="main-title"></h2>
        <div className="container">
          {
            department.map(({
              _id,
              image,
              name,
              description,
              Category,
            }) => {
              return (
                <div className="box" key={_id}>
                  {/* {console.log(`/User/product/${_id}`)} */}
                  <div className="data">
                   <NavLink to={`/Costumer/product/${_id}`}><img src={`http://127.0.0.1:4000/${image}`} alt="" /></NavLink>
                    <div className="social">
                      <a href="#">
                        <i ><FontAwesomeIcon icon={faEnvelope} color=""/></i>
                      </a>
                      <a href="#">
                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                      </a>
                      <a href="#">
                      <i><FontAwesomeIcon icon={faSquareInstagram} /></i>

                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <Typography component={"div"} className="info" >
                    <h3>{name}</h3>
                    <p>{Category}</p>
                    <Typography sx={{width:"100px"}}>{description}</Typography>
                  </Typography>
                </div>
              )
            })}
        </div>
       
      </div>
    </>
  );
}

export default Department;
