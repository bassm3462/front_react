import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const About = () => {
  return (
    <>
    <div className="discount" id="discount">
     
      <div className="form">
        <div className="content">
          <h2>About</h2>
          <img src="/image/christian-wiediger-Yep-psEeB9Y-unsplash.jpg"></img>
        </div>
      </div>
      <div className="image">
        <div className="content">
          <h2>About mall </h2>
          <p>
          E-learning has become an essential part of education, especially 
during the COVID-19 pandemic, where E-learning has become a popular 
choice for students and professionals alike to access educational resources 
and training programs from anywhere, at any time. However, with the rise 
of E-learning platforms, the security of these platforms has become a 
concern. One of the most significant security threats to E-learning 
platforms is SQL injection.[1] 

SQL injection is a type of security vulnerability that allows attackers to 
execute malicious SQL statements on a web application's database. These 
malicious SQL statements can allow attackers to access, modify, or delete 
sensitive data from the application's database, compromising the security of 
the E-learning platform. Therefore, it is crucial to develop a secure E-
learning system that can prevent SQL injection attacks. This system should 
implement various security measures, such as input validation, 
parameterized queries, and stored procedures, to protect against SQL 
injection attacks. 
          </p>
          <img src="imgs/discount.png" alt="" />
        </div>
      </div>
    </div>
</>
  )}
export default About