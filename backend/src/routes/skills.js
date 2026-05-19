import { Router } from "express";
import pool from "../db.js";

const router = Router();

//GET SKILLS:
router.get("/", async function (req, res) {
  const { rows } = await pool.query("SELECT * FROM skills");
  res.json(rows);
});

router.get("/:id", async function (req, res) {
  const { rows } = await pool.query("SELECT * FROM skills WHERE id = $1", [
    req.params.id,
  ]);
  res.json(rows);
});

export default router;
