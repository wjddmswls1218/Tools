import express from "express";
import { globalController } from "../controller/globalController";


const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/tools", globalController.toolsController);

export default globalRouter;