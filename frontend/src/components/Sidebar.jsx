import React from "react";
import { useNavigate } from "react-router-dom";
import '../app.css'

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h3>CourseSys</h3>
      <ul>
        <li>Dashboard</li>
        <li>My Courses</li>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Sidebar;
