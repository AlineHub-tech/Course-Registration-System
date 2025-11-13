import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const { title, code, description, capacity } = req.body;
    const course = await Course.create({ title, code, description, capacity });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

