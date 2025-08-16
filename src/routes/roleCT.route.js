import express from "express";
import { createRoleCt, getRoleCt } from "../controllers/roleCT.controller.js";

const rolesRoutes = express.Router();

rolesRoutes.get("/ctroles", getRoleCt);
rolesRoutes.post("/createctroles", createRoleCt);

export default rolesRoutes;



// this is role routes admin user client and all
// for now we cant not give update and delet roles 