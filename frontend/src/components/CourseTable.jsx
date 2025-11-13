import React, { useEffect, useState } from "react";
import axios from "axios";
import '../CourseTable.css'
const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c, i) => (
          <tr key={c._id}>
            <td>{i + 1}</td>
            <td>{c.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;

