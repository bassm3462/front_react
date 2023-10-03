import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Dashboard.css"
import { useDispatch } from "react-redux";
import{logout} from "../../redux/userSlice/userSlice"

export default function Header() {
    const dispatch = useDispatch()
    const info=JSON.parse(localStorage.getItem("user"))
    function handlLogout(){
      dispatch(logout(true));
    }
  return (
    <header className="header display ">
        <div className="imageP">
          <img className="imageEmployDashboard" src={`http://127.0.0.1:4000/${info.image}`} alt=" error" srcset="" />
        </div>
        <div>
         <img  className="imageEmployDashboard" src="https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png" alt="" srcset="" />
        </div>
        <div>
         <button onClick={handlLogout}className="logout"> Logout</button>
        </div>
      </header>
  )
}

