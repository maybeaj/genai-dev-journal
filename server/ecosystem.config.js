// ecosystem.config.js
module.exports = {
	apps: [
		{
			name: "genai-backend", // PM2에서 표시할 이름
			script: "./dist/index.js", // 컴파일된 JS 실행 파일
			exec_mode: "fork", // 클러스터링 필요 없으면 fork
			instances: 1, // 또는 "max"
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "development", // 기본 실행 환경
			},
			env_production: {
				NODE_ENV: "production", // --env production 시 적용
				PORT: 4000, // 필요한 운영 변수 추가 가능
			},
		},
	],
};
