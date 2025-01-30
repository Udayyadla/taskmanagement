import { Task } from "../models/task.model.js";

//Creating a new task
export const addTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      status,
      // userId: req.user.userId,
    });
    await task.save();
    res.status(201).json({ msg: "task created", task });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
//getting all tasks
export const getAllTasks = async (req, res) => {
  try {
    // console.log(req.user.userId)
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
//get tasks by id
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "no task found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
//update task
export const updateTask = async (req, res) => { 
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority, status } = req.body;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "no task found" });
    }
    if (title) task.title = title;
    if (description) task.description = description;
    if (dueDate) task.dueDate = dueDate;
    if (priority) task.priority = priority;
    if (status) task.status = status;

    // Save updated task
    await task.save();

    res.status(200).json({ msg: "task updated successfully" ,task});
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: "internal server error" });
  }
};

//delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: "no task found" });
    }

    res.status(200).json({ msg: "task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
/**
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzlhZjc4MjdjZWZhYTNiODEzOGY3MDciLCJpYXQiOjE3MzgyMDkyMjAsImV4cCI6MTczODIxMjgyMH0.zRgNk4gOC9MnS3_VhqH3nd2Lgc_QOq4FvMGMsvh2yvc
 */
