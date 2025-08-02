import dotenvFlow from "dotenv-flow";
dotenvFlow.config(); // NODE_ENV 기준 자동 로딩

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
