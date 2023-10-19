import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../style/ResatPassword.css"
import {
  faTwitter,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { override } from "../../Costumer/style/style";
import { GridLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
export default function PersonalProfile(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const info = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      {
        loading ?
          <GridLoader
            loading={loading}
            cssOverride={override}
            size={75}
            color="#2196f3"
          />
          : <section style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="6" className="mb-4 mb-lg-0">
                  <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                    <MDBRow className="g-0">
                      <MDBCol md="4" className="gradient-custom text-center text-white"
                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                        <MDBCardImage src={`http://127.0.0.1:4000/${info.image}`}
                          alt="Avatar" className="my-5" style={{ width: '100px', height: "100px", borderRadius: "50%" }} fluid />
                        {/* <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                        <MDBCardText>Web Designer</MDBCardText> */}
                        <MDBIcon far icon="edit mb-5" />
                      </MDBCol>
                      <MDBCol md="8">
                        <MDBCardBody className="p-4">
                          <MDBTypography tag="h6">Information</MDBTypography>
                          <hr className="mt-0 mb-4" />
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">{info.name}</MDBTypography>
                              <MDBCardText className="text-muted">{info.email}</MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Phone</MDBTypography>
                              <MDBCardText className="text-muted">{info.Phone}</MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <MDBTypography tag="h6">Information</MDBTypography>
                          <hr className="mt-0 mb-4" />
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Email</MDBTypography>
                              <MDBCardText className="text-muted">{info.email}</MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Gender</MDBTypography>
                              <MDBCardText className="text-muted">{info.Gender}</MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <div className="d-flex justify-content-start">
                            <a href="#!" className='ms-3'> <FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                            <a href="#!" className='ms-3'><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                            <a href="#!" className='ms-3'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                            <Link to="/Information/Edit" className='ms-5'>Edit Information </Link>
                          </div>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
      }
    </div>
  );
}