import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/tasklist.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const url = "https://task-management-g2nm.onrender.com/";
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${url}getAll`, {
        headers: { Authorization: `bearer ${token}` },
      });
      console.log(res.data);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}create`, newTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewTask({
        title: "",
        description: "",
        dueDate: "",
        priority: "medium",
      });
      fetchTasks();
      console.log(tasks);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${url}delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async () => {
    try {
      await axios.put(
        `${url}update/${editingTask._id}`,
        editingTask,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          required
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          required
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.priority} - {task.status}
            <button onClick={() => handleEditClick(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingTask && (
        <div>
          <h3>Edit Task</h3>
          <input
            type="text"
            value={editingTask.title}
            onChange={(e) =>
              setEditingTask({ ...editingTask, title: e.target.value })
            }
          />
          <select
            value={editingTask.priority}
            onChange={(e) =>
              setEditingTask({ ...editingTask, priority: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select
            value={editingTask.status}
            onChange={(e) =>
              setEditingTask({ ...editingTask, status: e.target.value })
            }
          >
            <option value="Todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={handleUpdateTask}>Update</button>
          <button onClick={() => setEditingTask(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
