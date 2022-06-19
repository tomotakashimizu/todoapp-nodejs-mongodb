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

const updateTask = (req, res) => {
  res.send('ある特定のタスクを更新しました');
};

const deleteTask = (req, res) => {
  res.send('ある特定のタスクを削除しました');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
