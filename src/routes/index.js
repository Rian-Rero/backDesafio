import { Router } from "express";
import * as ToolsController from "../controllers/ToolsController.js";

const routes = Router();

routes.get("/tools", ToolsController.get);
routes.post("/tools", ToolsController.create);
routes.put("/tools/:id", ToolsController.update);
routes.delete("/tools/:id", ToolsController.destroy);

export default routes;
