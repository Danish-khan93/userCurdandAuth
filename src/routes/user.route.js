import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  loginUser,
} from "../controllers/user.controller.js";
const userRoutes = express.Router();

userRoutes.post("/createuser", createUser);
userRoutes.get("/getalluser", getAllUser);
userRoutes.get("/getsingleuser/:id", createUser);
userRoutes.put("/updateuser/:id", createUser);
userRoutes.delete("/deleteuser/:id", deleteUser);
userRoutes.post("/login", loginUser);

export default userRoutes;
