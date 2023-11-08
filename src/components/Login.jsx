/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../API/API_URL';
import { DataProvider } from './ContextData';

const Login = () => {
  const {setStatus}=useContext(DataProvider);
  const [loading,setLoading]=useState(false);
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
    setLoading(true);
    console.log("loading...");
    try {
      const response = await axios.post(`${API_URL}api/login`, formData);
      // if (response.status !== 200) {
      //   throw new Error("Login failed!");
      // }
      setStatus(true);
      setLoading(false);
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setFormData({
      email: '',
      password: '',
    });
  };
  

  return (
    <div className="section flex flex-col login">
      <h2>Login</h2>
      {loading ? (
        <h1>Loading please wait ..</h1>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <button type="submit">Login</button>
        </form>
      )}
      <Link to="/signup">SignUp First</Link>
    </div>
  );
  
};

export default Login;
