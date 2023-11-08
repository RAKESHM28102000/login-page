/* eslint-disable react/prop-types */
import  {  useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import { Link } from 'react-router-dom';
import { FaPen} from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../API/API_URL';
import { DataProvider } from './ContextData';


const Profile = () => {
  const navigate = useNavigate();

  const [userData,setUserData]=useState([]);
  const {setStatus}=useContext(DataProvider);


  const data =[{name:"jack",email:"mail@gmail.com",gender:"male",dob:"12/09/2000",mobileno:"978786656",age:"22"},
  {name:"vicky",email:"mail@gmail.com",gender:"male",dob:"1212",mobileno:"92132132",age:"28"},
  {name:"john",email:"mail@gmail.com",gender:"male",dob:"1212",mobileno:"62132132",age:"26"},
  {name:"gopinath",email:"mail@gmail.com",gender:"male",dob:"1212",mobileno:"42132132",age:"25"}]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}api/profile`);
        // console.log("entered into profile");
        console.log(response.data.foundeditems);
        setUserData(response.data.foundeditems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[]);
  const handleDelete = async (id) => {
    console.log(id)
    try {
      const response = await axios.delete(`${API_URL}api/delete/${id}`);
      console.log(response.data);
      alert("deleted");
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  return (<div className='profile-card' style={{display:"flex",flexDirection:"column",gap:"30px"}}>
  <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
  <button className='logout' style={{margin:"20px",color:"red",border:"2px solid red",backgroundColor:"transparent"}}>
        <Link to="/login"><p onClick={()=>setStatus(false)}>Logout</p></Link>
  </button>
  <button className='create' style={{margin:"20px",color:"red",border:"2px solid red",backgroundColor:"transparent"}}>
        <Link to="/create">Create Profile</Link>
  </button>
  </div>
  {userData && userData.length > 0 ? (
  userData.map((user,index) => {
    return (
      <div className="flex flex-col real-profile" key={user._id}>
        <h2>Profile {index+1}</h2>
        {console.log(user.id)}
        <div className="flex flex-col form">
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Gender: {user.gender}</h3>
          <h3>Age: {user.age}</h3>
          <h3>Date of Birth: {user.dob}</h3>
          <h3>Mobile no: {user.mobileno}</h3>
          <button>
            <Link to={`/update/${user._id}`}>
              <FaPen /> Edit
            </Link>
          </button>
          <button onClick={() => handleDelete(user._id)}>
            <FaRegTrashCan /> DELETE
          </button>
        </div>
      </div>
    );
  })
) : (
  data.map((user, index) => {
    return (
      <ProfileCard
        key={index}
        name={user.name}
        email={user.email}
        gender={user.gender}
        dob={user.dob}
        mobileno={user.mobileno}
      />
    );
  })
)}

</div>);
};

export default Profile;
