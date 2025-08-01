module.exports = {
	apps: [
		{
			name: "genai-backend",
			script: "./dist/index.js",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
