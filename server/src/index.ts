import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from './routes/auth.route'
import userRouter from './routes/user.route'
dotenv.config();

const app = express();

app.use(cors({ origin: '*' }))
/* app.use(cors({
  	origin: 'https://genai-dev-journal.vercel.app/', // 실제 Vercel 주소
	credentials: true,
})) */
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
