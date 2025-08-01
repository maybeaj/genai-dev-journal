// ecosystem.config.js
module.exports = {
	apps: [
		{
			name: "genai-backend",
			script: "./dist/index.js",
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
		},
	],
};
