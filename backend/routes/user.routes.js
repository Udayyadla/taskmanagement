import { Router } from "express";
import { login, signup } from "../controllers/user.controller.js";
const userrouter = Router();
userrouter.post("/signup", signup);
userrouter.post("/login", login);
export { userrouter };
/**
 * http://localhost:3010/signup
 * http://localhost:3010/login
 */