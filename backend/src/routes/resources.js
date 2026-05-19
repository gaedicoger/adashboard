import { Router } from "express";
import pool from "../db.js";

const router = Router();

//GET RESOURCES:
router.get("/", async function (req, res) {
  const { rows } = await pool.query("SELECT * FROM resources");
  res.json(rows);
});

router.get("/:id", async function (req, res) {
  const { rows } = await pool.query("SELECT * FROM resources WHERE id = $1", [
    req.params.id,
  ]);
  res.json(rows);
});

//POST RESOURCES:
router.post("/", async (req, res) => {
  const { type, title, description, url, is_ada, theme_id } = req.body;
  const { rows } = await pool.query(
    "INSERT INTO resources (type, title, description, url, is_ada, theme_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [type, title, description, url, is_ada, theme_id],
  );
  res.status(201).json(rows[0]);
});

//PUT RESOURCES:
router.put("/:id", async (req, res) => {
  const { type, title, description, url, is_ada, theme_id } = req.body;
  const { rows } = await pool.query(
    "UPDATE resources SET type= $1, title= $2, description= $3, url= $4, is_ada= $5, theme_id= $6 WHERE id= $7 RETURNING *",
    [type, title, description, url, is_ada, theme_id, req.params.id],
  );
  res.status(200).json(rows[0]); //attention au code
});

//DELETE RESOURCES:
router.delete("/:id", async (req, res) => {
  const { rows } = await pool.query(
    "DELETE FROM resources WHERE id= $1 RETURNING *",
    [req.params.id],
  );
  res.status(200).json(rows[0]); //attention au code
});

export default router;
