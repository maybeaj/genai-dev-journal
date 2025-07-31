// ecosystem.config.js
module.exports = {
	apps: [
		{
			name: "genai-backend-development",
			script: "./dist/index.js",
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "development", // 개발용 환경
			},
		},
		{
			name: "genai-backend-production",
			script: "./dist/index.js",
			instances: "max",
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "production", // 운영용 환경
			},
		},
	],
};
