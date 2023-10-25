import React from "react";

function ChatResive() {
  return (
    <>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
        alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
        width={60}
      />
      <div className="card">
        <div className="card-header d-flex justify-content-between p-3">
          <p className="fw-bold mb-0">Brad Pitt</p>
          <p className="text-muted small mb-0">
            <i className="far fa-clock" /> 12 mins ago
          </p>
        </div>
        <div className="card-body">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChatResive;
