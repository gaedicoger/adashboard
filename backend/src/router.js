import { Router } from "express";
import subSkillsRouter from "./routes/sub_skills.js";
import skillsRouter from "./routes/skills.js";

const router = Router();

router.use("/sub_skills", subSkillsRouter);
router.use("/skills", skillsRouter);

export default router;
