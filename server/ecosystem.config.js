module.exports = {
	apps: [
		{
			name: "genai-backend",
			script: "./dist/index.js",
			env_production: {
				NODE_ENV: "production",
			},
		},
	],
};
