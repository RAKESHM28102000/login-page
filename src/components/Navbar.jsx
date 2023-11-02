import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar";
import { FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  function handleChange(){
   setToggle(!toggle);
  //  alert("toggle");
  }
  
  return (<header className="header">
    <nav className="navbar" style={{color:"black",display:'flex',justifyContent:"space-between",alignItems:"center",minHeight:"50px"}}>
    <h2 className="logo">Guvi</h2>
    <ul className="list-item-in-navbar">
      <li className="navlist">
        <Link to="/">Home</Link>
      </li>
      <li className="navlist">
        <Link to="/signup">SignUp</Link>
      </li>
      <li className="navlist">
        <Link to="/login">Login</Link>
      </li>
    </ul>
   <div className="toggle" onClick={handleChange}><FaBars style={{width:"28px",height:"28px"}}/></div>
  </nav>
  { toggle && <Sidebar toggle={toggle} setToggle={setToggle}/>}
  </header>
  )
}

export default Navbar