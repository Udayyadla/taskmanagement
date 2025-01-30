import express from "express";
import cors from 'cors'
import "dotenv/config.js";
import { connectToDB } from "./dbconnect.js";
import { userrouter } from "./routes/user.routes.js";
import { taskRouter } from "./routes/task.routes.js";
const PORT = process.env.PORT || 8090;
const app = express();
app.use(express.json());
app.use(cors())
app.use("/", userrouter);
app.use("/", taskRouter);
app.listen(PORT, () => {
  connectToDB();
  console.log(`server is listening on http://localhost:${PORT}`);
});
