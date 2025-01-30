import { Router } from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/tasks.controller.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
const taskRouter = Router();
taskRouter.post("/create", verifyJWT, addTask);
taskRouter.get("/getAll", verifyJWT, getAllTasks);
taskRouter.get("/getById/:id", verifyJWT, getTaskById);
taskRouter.put("/update/:id", verifyJWT, updateTask);
taskRouter.delete("/delete/:id", verifyJWT, deleteTask);
export { taskRouter };
