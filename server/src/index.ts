import dotenvFlow from "dotenv-flow";
dotenvFlow.config(); // NODE_ENV 기준 자동 로딩

import express from "express";
import cors from "cors"; // cors 라이브러리 유지
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

const app = express();

// CORS 설정
// 개발 환경에서만 cors 미들웨어 활성화
if (process.env.NODE_ENV === "development") {
    const allowedOrigin = process.env.ALLOWED_ORIGIN_DEV; // 개발 환경용 오리진 (예: http://localhost:3000)
    console.log(`🚀 Development CORS enabled for origin: ${allowedOrigin}`);
    app.use(
        cors({
            origin: allowedOrigin,
            credentials: true,
        })
    );
} else {
    // 프로덕션 환경에서는 Nginx가 CORS를 처리하므로, 백엔드에서는 cors 미들웨어를 비활성화
    // 혹은 아주 기본적인 cors 미들웨어만 두되, Access-Control-Allow-Origin 헤더는 Nginx에서 덮어쓰도록 유도
    console.log(`📦 Production CORS handled by Nginx.`);
    // 만약 백엔드에서 특정 헤더를 추가해야 한다면, 아주 최소한의 cors 미들웨어를 둘 수도 있습니다.
    // 하지만 대부분의 경우 Nginx가 충분히 처리합니다.
}

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(
        `✅ Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
});