module.exports = {
	apps: [
		{
			name: "genai-backend",
			script: "dist/index.js", // <-- 빌드된 파일 경로를 정확히 명시 (예: dist/index.js 또는 build/index.js)
			instances: 1, // 일단 테스트용으로 1개 인스턴스
			exec_mode: "fork", // 일단 cluster 대신 fork 모드로 (심플하게)
			env_production: {
				NODE_ENV: "production",
				PORT: 4000,
				// 여기에 다른 production 환경 변수들을 추가할 수 있습니다.
				// 예를 들어, DB_HOST_PROD, API_KEY_PROD 등
			},
			// 개발 환경이 필요하다면 아래 env 블록도 추가
			// env: {
			//   NODE_ENV: "development",
			//   PORT: 4000
			// }
		},
	],
};
