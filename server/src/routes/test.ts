import express from "express";
import { pool } from "../config/db";

const router = express.Router();

router.get("/test-db", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT NOW() AS now");
		res.json(rows);
	} catch (error) {
		res.status(500).json({ error: "DB 연결 실패", details: error });
	}
});

export default router;
