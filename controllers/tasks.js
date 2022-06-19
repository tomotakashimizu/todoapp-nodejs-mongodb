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

const getTask = (req, res) => {
  res.send('ある特定のタスクを取得しました');
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
