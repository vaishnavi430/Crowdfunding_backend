const Project = require("../models/Project");

const createProject = async (req, res) => {
  const { title, description, goalAmount, deadline } = req.body;
  const project = await Project.create({ title, description, goalAmount, deadline, creator: req.user._id });

  res.status(201).json(project);
};

const getProjects = async (req, res) => {
  const projects = await Project.find().populate("creator", "name");
  res.json(projects);
};

module.exports = { createProject, getProjects };
