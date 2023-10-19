import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { AccessTime, LocationOn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Logo</h3>
          <ul className="social">
            <li>
              <a href="#" className="facebook">
                <i>
                  <FontAwesomeIcon icon={faFacebookF} />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i>
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="youtube">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
              </a>
            </li>
          </ul>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <FontAwesomeIcon icon={faArrowRight} color="#2196f3" />
              <a href="#" className="ms-2">
                Important Link 1
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} color="#2196f3" />
              <a href="#" className="ms-2">
                Important Link 2
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} color="#2196f3" />
              <a href="#" className="ms-2">
                Important Link 3
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} color="#2196f3" />
              <a href="#" className="ms-2">
                Important Link 4
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} color="#2196f3" />
              <a href="#" className="ms-2">
                Important Link 5
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <i>
              <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </i>
            <div className="info">
              Egypt, Giza, Inside The Sphinx, Room Number 220
            </div>
          </div>
          <div className="line">
            <i>
              <FontAwesomeIcon icon={faClock} size="lg" />
            </i>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            <div className="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">Made by Basseim Hussein</p>
    </div>
  );
};
export default Footer;
