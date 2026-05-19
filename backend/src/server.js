import express from "express";
import pool from "./db.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🚀 Serveur lancé : http://localhost:${port}`);
});
