import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/ResatPassword.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { override } from "../../Costumer/style/style";
import { GridLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {gitSingleUser}from "../../../redux/userSlice/authActions"
import {
  MDBContainer,
  MDBRow,
  MDBCard,
} from "mdb-react-ui-kit";
import { backendURL } from "../../../redux/api/axios";
import "../style/userInformation.css";
import { useDispatch,useSelector } from "react-redux";
export default function PersonalProfile(props) {
  const { data } = useSelector((state) => {
    return state.user;
  });
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const Navigateto = useNavigate();
  const ClickToEditInfo=()=>{
    Navigateto("/Information/Edit");
  }
  useEffect(()=>{
    dispatch(gitSingleUser())
  },[dispatch])
 console.log(data.name);
  return (
    <div>
      {loading ? (
        <GridLoader
          loading={loading}
          cssOverride={override}
          size={75}
          color="#2196f3"
        />
      ) : (
        <section style={{ backgroundColor: "#f4f5f7" }}>
         
          <MDBContainer className=" h-100">
            <MDBRow
              className="justify-content-center align-items-center mb-4 container "
              style={{ backgroundColor: "white", maxWidth: "100%", borderRadius: "25px"  }}
            >
              <div className="mb-3 " style={{ borderRadius: ".5rem" }}>
                <div className="headerProfile pb-4">
                  <div className="d-flex justify-content-between mt-3  ">
                    <img
                      src="/image/photoLogoUR.jpg"
                      alt="User Avatar"
                      className="profileImage"
                    />
                    <div className="m-4">
                      <p>
                        <span style={{ color: "#b82ce9", fontWeight: "700" }}>GENERAL COMPANY</span> <br />
                        <span style={{ color: "#000066" }}>FOR ELECTRONIC SYSTEMS</span>
                      </p>
                    </div>
                    <img
                      src="/image/photologoCompany.jpg"
                      alt="User Avatar"
                      className="profileImage"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center MOReSTyle">
                  <MDBCard className="containerImageProfile">
                    <div className="d-flex justify-content-center align-items-center flex-column h-100">
                      <img
                        src={`${backendURL}/${data.image}`}
                        alt="User Avatar"
                        className="avaterImgeCenterProfole mb-4"
                      />
                      <Link href="https://urproducts.iq/" target="_blank">
                        <img
                          src="/image/image (4).png"
                          alt=""
                          width={"150px"}
                          loading="lazy"
                        className="hoverImageUR "
                        />
                      </Link>{" "}
                    </div>
                  </MDBCard>
                  <div>
                    <div className="mediaCenterColum">
                      <div className="icontColumCenter ">
                        <a href="#!" className="m-3">
                          {" "}
                          <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a href="#!" className="m-3">
                          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                        <a href="#!" className="m-3">
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="#!" className="m-3">
                          <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                        <a href="#!" className="m-3">
                          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <MDBCard className="containerImageProfile">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <div className="textColumCenter">
                        <h4 className="card-title mb-1">
                          Name:{data.name
                          }</h4>
                        <p className="card-text mb-2 text-muted">
                          Email:{data.email}
                        </p>
                        <p className="card-text mb-2">
                          Type of user: {data.user_type}
                        </p>
                        <p className="card-text mb-2">
                          phone: {
                            data.Phone ? 
                            <span>+964 {data.Phone}</span>  :
                              <span>+964 </span>
                          }
                        </p>
                      </div>
                    </div>
                  </MDBCard>
                </div>
                <div className="textleftend ">
                  <button className="buttonEditUNfo btnn"
                onClick={()=>ClickToEditInfo()}
                  >
                  Edit Information
                  </button>
                </div>
              </div>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </div>
  );
}
