/* eslint-disable react/prop-types */
import {FaXmark} from "react-icons/fa6";
import { Link } from "react-router-dom";
function Sidebar({toggle,setToggle}) {
  return (
    <div className="sidebar">
    <FaXmark style={{width:"30px",height:"30px",position:'absolute',top:"10px",right:"50px"}} 
    onClick={()=>setToggle(!toggle)}/>

<ul className="list-item-in-siderbar">
      <li className="navlist">
        <Link to="/"  onClick={()=>setToggle(!toggle)}>Home</Link>
      </li>
      <li className="navlist">
        <Link to="/signup"  onClick={()=>setToggle(!toggle)}>SignUp</Link>
      </li>
      <li className="navlist">
        <Link to="/login"  onClick={()=>setToggle(!toggle)}>Login</Link>
      </li>
    </ul>
    </div>
  )
}

export default Sidebar