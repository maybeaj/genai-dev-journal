import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from './routes/test'
dotenv.config();

const app = express();

app.use(cors({ origin: '*' }))
/* app.use(cors({
  	origin: 'https://genai-dev-journal.vercel.app/', // 실제 Vercel 주소
	credentials: true,
})) */
app.use(express.json());

app.use("/",router);

app.get("/", (_, res) => {
	res.send("GenAI 개발일지 백엔드 작동중!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});
