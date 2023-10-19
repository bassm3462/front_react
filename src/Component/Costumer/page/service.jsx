import React from "react";
import "../../Costumer/style/service.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faDisplay, faGears, faImage, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>What I Do</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faDisplay} /></i>
                </div>
                <div className="feature-content">
                  <h5>Unique design</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faUser} /></i>
                </div>
                <div className="feature-content">
                  <h5>Different Layout</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faComment} /></i>
                </div>
                <div className="feature-content">
                  <h5>Make it Simple</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faImage} /></i>
                </div>
                <div className="feature-content">
                  <h5>Responsiveness</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faThumbsUp} /></i>
                </div>
                <div className="feature-content">
                  <h5>Testing for Perfection</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i><FontAwesomeIcon icon={faGears} /></i>
                </div>
                <div className="feature-content">
                  <h5>Advanced Options</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
