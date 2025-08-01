import dotenv from "dotenv";

console.log(`💡 Current NODE_ENV (before dotenv config): "${process.env.NODE_ENV}"`);

const mode = process.env.NODE_ENV || "development";
const envPath = mode === "production" ? ".env.production" : ".env";

console.log(`🌱 Loading env from path: "${envPath}"`); // 경로를 따옴표로 감싸서 정확히 확인

dotenv.config({ path: envPath });

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
