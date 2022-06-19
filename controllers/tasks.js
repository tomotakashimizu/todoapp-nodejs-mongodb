const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const createdTask = await Task.create(req.body);
    res.status(200).json(createdTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    task || res.status(404).json(`_id:${req.params.id}は存在しません`);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    updatedTask || res.status(404).json(`_id:${req.params.id}は存在しません`);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id });
    deletedTask || res.status(404).json(`_id:${req.params.id}は存在しません`);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
