import React, { useEffect, useState } from 'react';
import './UpdateEmployee.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateEmployee = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/employee/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log('Error :' + err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/api/employee/${id}`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('res>>', res);
        navigate('/');
      })
      .catch((err) => {
        console.log('Error>>>', err);
      });
  };

  return (
    <div className="center-form">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="phone"
            placeholder="Enter phone number"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="department"
            placeholder="Enter department"
            value={user.department}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
