import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from './routes/test'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/",router);

app.get("/", (_, res) => {
	res.send("GenAI 개발일지 백엔드 작동중!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});
