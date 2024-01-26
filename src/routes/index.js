import { Router } from "express";
import ToolsController from "../controllers/ToolsController.js";

const routes = Router();

routes.get("/tools", ToolsController.read);

export default routes;
