import express from "express";
import {getAllHewanController, createHewanController, getHewanByIdController, updateHewanController, deleteHewanController} from "../controllers/hewanController.js";

const router = express.Router();

router.get("/hewan", getAllHewanController);
router.get("/hewan/:id", getHewanByIdController);
router.post("/hewan", createHewanController);
router.patch("/hewan/:id", updateHewanController);
router.delete("/hewan/:id", deleteHewanController);

export default router;
