import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Contact = () => {
  return (
    <>
    <div className="discount" id="discount">
      <div className="image">
        <div className="content">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
            ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
          <img src="imgs/discount.png" alt="" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Contact</h2>
          <form action="">
            <input className="input" type="text" placeholder="Your Name" name="name" />
            <input className="input" type="email" placeholder="Your Email" name="email" />
            <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
</>
  )}
export default Contact