import express from "express";
import { PORT } from "../src/constant.js";
import userRoutes from "./routes/user.route.js";
import { dbConnect } from "./db.js";
import rolesRoutes from "./routes/roleCT.route.js";
const app = express();
dbConnect();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", rolesRoutes);

app.listen(PORT, () => {
  console.log(`this app is running on the ${PORT}`);
});
