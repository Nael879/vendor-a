import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { pool } from "./db.js";

const app = express();

app.get("/api/data", async (req, res) => {
  try {
    const q = "SELECT * FROM vendor_a.products ORDER BY id ASC";
    const { rows } = await pool.query(q);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default app;

console.log("Connected URL:", process.env.DATABASE_URL);

