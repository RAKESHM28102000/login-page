/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setStatus}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("loading...");
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      setStatus(true);
      navigate('/');
      console.log(response.data);
      // console.log(formData)
      
    } catch (error) {
      console.error(error);
    }
    setFormData({
      email: '',
      password: '',
     })
   
  };

  return (
    <div className="section flex flex-col">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className=' flex flex-col'>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
    
        <Link to="/signup">SignUp First</Link>
      
    </div>
    
  );
};

export default Login;
