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

//POST SKILLS:
router.post("/", async (req, res) => {
  const { name } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO skills (name) VALUES ($1) RETURNING *",
    [name],
  );
  res.status(201).json(rows[0]);
});

//PUT SKILLS:
router.put("/:id", async (req, res) => {
  const { name, description } = req.body;
  const { rows } = await pool.query(
    "UPDATE skills SET name= $1, description= $2 WHERE id= $3 RETURNING *",
    [name, description, req.params.id],
  );
  res.status(200).json(rows[0]); //attention au code
});

//DELETE SKILLS:
router.delete("/:id", async (req, res) => {
  const { rows } = await pool.query(
    "DELETE FROM skills WHERE id= $1 RETURNING *",
    [req.params.id],
  );
  res.status(200).json(rows[0]); //attention au code
});

export default router;
