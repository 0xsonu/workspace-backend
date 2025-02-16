import { Router } from "express";
import { joinWorkspaceController } from "../controllers/memberController";

const memberRoutes = Router();

memberRoutes.post("/workspace/:inviteCode/join", joinWorkspaceController);

export default memberRoutes;
