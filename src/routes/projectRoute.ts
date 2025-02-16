import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getAllProjectsInWorkspaceController,
  getProjectAnalyticsController,
  getProjectByIdAndWorkspaceIdController,
  updateProjectController,
} from "../controllers/projectController";

const projectRoutes = Router();

projectRoutes.post("/workspace/:workspaceId/create", createProjectController);

projectRoutes.put(
  "/:id/workspace/:workspaceId/update",
  updateProjectController
);

projectRoutes.delete(
  "/:id/workspace/:workspaceId/delete",
  deleteProjectController
);

projectRoutes.get(
  "/workspace/:workspaceId/all",
  getAllProjectsInWorkspaceController
);

projectRoutes.get(
  "/:id/workspace/:workspaceId/analytics",
  getProjectAnalyticsController
);

projectRoutes.get(
  "/:id/workspace/:workspaceId",
  getProjectByIdAndWorkspaceIdController
);

export default projectRoutes;
