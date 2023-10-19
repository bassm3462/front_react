import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const info = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (info) {
      setEmail(info?.email);
      setName(info?.name);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
   const formData=new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('body', message)
    // dispatch(AddMessage(formData))
  }
  return (
    <>
      <div className="discount" id="discount">
        <div className="image">
          <div className="content">
            <h2>Contact</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores consectetur, recusandae ratione provident
              necessitatibus, cumque delectus commodi fuga praesentium beatae.
              Totam vel similique laborum dicta aperiam odit doloribus corporis.
            </p>
            <img src="imgs/discount.png" alt="" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Contact</h2>
            <form action="">
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="input"
                placeholder="Tell Us About Your Needs"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" onSubmit={(e)=>handleSubmit(e)}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
