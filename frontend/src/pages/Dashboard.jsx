
import React from "react";
import Sidebar from "../components/Sidebar";
import CourseTable from "../components/CourseTable";
import RegisterCourse from "../components/RegisterCourse";
import "../Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h2>Course Registration Dashboard</h2>
        <RegisterCourse />
        <CourseTable />
      </div>
    </div>
  );
};

export default Dashboard;

