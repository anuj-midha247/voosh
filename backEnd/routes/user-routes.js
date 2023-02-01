import express from "express";
import { getAllUsers, login, signup } from "../controllers/user-controller";

const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.post("/add-user", signup);
userRouter.post("/login-user", login);

export default userRouter;