module.exports = {
	apps: [
		{
			name: "genai-backend",
			script: "dist/index.js", // ✅ 빌드된 JS 파일 경로
			instances: 1, // ✅ fork 모드로 1개 인스턴스
			exec_mode: "fork", // ✅ 테스트 용도로 적절
			env_production: {
				NODE_ENV: "production",
				PORT: 4000,
				// ✅ 여기에 다른 환경 변수도 추가 가능 (DB_HOST 등)
			},
		},
	],
};
