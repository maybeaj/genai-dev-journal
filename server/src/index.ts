// src/index.ts
import dotenv from "dotenv";

// NODE_ENV 값에 따라 자동으로 .env 또는 .env.production 적용됨
dotenv.config();

console.log("✅ NODE_ENV:", process.env.NODE_ENV);

import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN;

app.use(
	cors({
		origin: allowedOrigin,
		credentials: true,
	})
);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(
		`✅ Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
	);
});
