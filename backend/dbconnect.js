import { connect } from "mongoose";
import "dotenv/config.js";
export const connectToDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("db connection is success");
  } catch (error) {
    console.log(error.message);
    console.log("db connection failed");
  }
};
