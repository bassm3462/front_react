import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Dashborad() {
  return (
   <>
   <div class="landing">
      <div class="container">
        <div class="text">
          <h1>Welcome, In My Company</h1>
          <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
        </div>
        <div class="image">
          <img src="/image/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  </>

  )
}

export default Dashborad