import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function CreateProfile(){
    const navigate = useNavigate();
    const [user,setUser]=useState({
        name: "",
        email: "",
        gender: "",
        age: "",
        mobileno: "",
        dob: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
      };

 const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/profile',user);
          console.log(response.data);
          navigate('/'); 
        } catch (error) {
          console.error(error);
        }
        setUser({
            name: "",
            email: "",
            gender: "",
            age: "",
            mobileno: "",
            dob: "",
        });}
  return (
    <div className="flex flex-col" style={{ marginTop: "20px" }}>
        <form className="flex flex-col">
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={user.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dob"
          placeholder="Date of Birth"
          value={user.dob}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileno"
          placeholder="Mobile"
          value={user.mobileno}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>submit</button>

        </form>
    </div>
  )
  }

export default CreateProfile;