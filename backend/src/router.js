import { Router } from "express";
import resourcesRouter from "./routes/resources.js";
import skillsRouter from "./routes/skills.js";

const router = Router();

router.use("/resources", resourcesRouter);
router.use("/skills", skillsRouter);

export default router;
