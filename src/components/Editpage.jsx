import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Editpage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    mobileno: "",
    dob: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        setUpdatedData(response.data.foundeditems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/profile/${id}`, updatedData);
      console.log(response.data);
      alert("Updated");
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section">
      <div className="flex flex-col" style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={updatedData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={updatedData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={updatedData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={updatedData.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dob"
          placeholder="Date of Birth"
          value={updatedData.dob}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileno"
          placeholder="Mobile"
          value={updatedData.mobileno}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>

      </div>
    </div>
  );
}

export default Editpage;
