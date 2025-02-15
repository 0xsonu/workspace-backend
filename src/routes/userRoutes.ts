import { Router } from "express";
import { getCurrentUserController } from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/current", getCurrentUserController);

export default userRoutes;
