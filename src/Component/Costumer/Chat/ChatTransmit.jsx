import React from 'react'

function ChatTransmit() {
  return (
    <><div className="card w-100">
    <div className="card-header d-flex justify-content-between p-3">
      <p className="fw-bold mb-0">Lara Croft</p>
      <p className="text-muted small mb-0">
        <i className="far fa-clock" /> 13 mins ago
      </p>
    </div>
    <div className="card-body">
      <p className="mb-0">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
    </div>
  </div>
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
    alt="avatar"
    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
    width={60}
  /></>
  )
}

export default ChatTransmit