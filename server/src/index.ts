import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env.production" : ".env" });

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

app.get("/", (_, res) => {
	res.send("GenAI 개발일지 백엔드 작동중!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});
