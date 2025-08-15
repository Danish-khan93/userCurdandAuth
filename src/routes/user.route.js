import express from "express";
import { createUser, getAllUser,loginUser } from "../controllers/user.controller.js";
const userRoutes = express.Router();

userRoutes.post("/createuser", (req, res) => {
  createUser(req, res);
});
userRoutes.get("/getalluser", (req, res) => {
  getAllUser(req, res);
});
userRoutes.get("/getsingleuser/:id", (req, res) => {
  createUser(req, res);
});
userRoutes.put("/updateuser/:id", (req, res) => {
  createUser(req, res);
});
userRoutes.delete("/deleteuser/:id", (req, res) => {
  createUser(req, res);
});

userRoutes.post("/login", (req, res) => {
  loginUser(req, res);
});

export default userRoutes;
