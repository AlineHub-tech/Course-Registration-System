import Registration from "../models/Registration.js";

export const registerCourse = async (req, res) => {
  try {
    const exists = await Registration.findOne({ student: req.user._id, course: req.body.course });
    if (exists) return res.status(400).json({ message: "Already registered" });
    const reg = await Registration.create({ student: req.user._id, course: req.body.course });
    res.json(reg);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const myCourses = async (req, res) => {
  const list = await Registration.find({ student: req.user._id }).populate("course");
  res.json(list);
};
