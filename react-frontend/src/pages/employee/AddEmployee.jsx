import React, { useState } from "react";
import "./AddEmployee.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/employee", user)
      .then((res) => {
        console.log("res >>", res.data);
        setUser({
          name: "",
          email: "",
          phone: "",
          department: "",
        });
        setMessage("Employee added successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log("Err >>>", err);
        setMessage("Error adding employee.");
      });
  };

  return (
    <div className="center-form">
      <h1>Add New Employee</h1>
      {message && <p className="message">{message}</p>}

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
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
