import React, { useState } from "react";
import axios from "axios";
import '../app.css'

const RegisterCourse = () => {
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/courses/register", { course });
    alert("Course Registered");
  };

  return (
    <div className="register-course">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default RegisterCourse;

