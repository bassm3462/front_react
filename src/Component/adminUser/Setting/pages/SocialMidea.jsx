import React from 'react'
import { ButtonClearState, ButtonSave } from '../../../Config/Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function SocialMidea() {
  return (
    <div className="social-boxes p-20 bg-white rad-10">
    <h2 className="mt-0 mb-10">Social Info</h2>
    <p className="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
    <div className="d-flex align-center mb-15">
      <i className=" center-flex c-grey">
        <FontAwesomeIcon icon={faTwitter} />
      </i>
      <input
        className="w-full"
        type="text"
        placeholder="Twitter Username"
      />
    </div>
    <div className="d-flex align-center mb-15">
      <i className=" center-flex c-grey">
        <FontAwesomeIcon icon={faFacebookF} />
      </i>
      <input
        className="w-full"
        type="text"
        placeholder="Facebook Username"
      />
    </div>
    <div className="d-flex align-center mb-15">
      <i className="center-flex c-grey">
        <FontAwesomeIcon icon={faInstagram} />
      </i>
      <input
        className="w-full"
        type="text"
        placeholder="Instagram Username"
      />
    </div>
    <div className="mt-3">
      <ButtonSave className="me-3">Save</ButtonSave>
      <ButtonClearState>Edit About</ButtonClearState>
    </div>
  </div>
  )
}

export default SocialMidea