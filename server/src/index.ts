import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env.production" : ".env" });

const app = express();

// CORS 설정 (여러 origin 허용)
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	})
);

app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (_, res) => {
	res.send("GenAI 개발일지 백엔드 작동중!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});
