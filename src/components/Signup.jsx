/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API/API_URL';
import { DataProvider } from './ContextData';

function Signup() {
  const navigate = useNavigate();
  const {setStatus}=useContext(DataProvider);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}api/signup`, formData);
      console.log(response.data);
      setStatus(true);
      navigate('/'); 
    } catch (error) {
      console.error(error);
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  };

  return (<main>
    <div className="section flex flex-col">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={formData.name}
          onChange={handleChange} />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange} />
        <input
          type="password"
          required
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange} />
        <input
          type="password"
          required
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  </main>
  );
}

export default Signup;
