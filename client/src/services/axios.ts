import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true, // ✅ 서버에 쿠키나 인증정보 전송
	headers: {
		"Content-Type": "application/json",
	},
});

// ✅ 요청 시 토큰 자동 첨부
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
